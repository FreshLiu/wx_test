// import {
//     InvalidArgumentError,
//     ArgumentNullError
// } from '../error/index';
// import { get as objectGet } from '../utils/object';

const CURRENT_SYMBOL = Symbol("_current");
const CURRENT_LANGUAGE_SYMBOL = Symbol("_currentLanguage");
const LOCALES_MAP_SYMBOL = Symbol("_localesMap");

class LocalesManagerClass {
    constructor(localesMap, defaultLanguage) {
        //验证数据结构：参数是个对象，每一个value必须也是objecgt
        if (localesMap == null) {
            throw new Error(`The argument ${this.constructor.name}.localesMap can not be null`);
        }
        if (typeof localesMap !== "object") {
            throw new Error(`The argument ${this.constructor.name}.localesMap is not valid`);
        }
        for (let [localeName, locales] of Object.entries(localesMap)) {
            if (locales == null) {
                throw new Error(`The argument Locales["${localeName}"] can not be null`);
            }
            if (typeof locales !== "object") {
                throw new Error(`The argument Locales["${localeName}"] is not valid`);
            }
        }

        //验证每一个value，递归地把整个对象平铺展开为数组
        let localeKeysMap = {};
        for (let localeName in localesMap) {
            if (localesMap.hasOwnProperty(localeName)) {
                if (!localeKeysMap.hasOwnProperty(localeName)) {
                    localeKeysMap[localeName] = getKeysRecursively(localesMap[localeName]);
                }
            }
        }

        // 验证所有语言的数组必须：长度相同; 对数组进行排序，排序后的所有数组每一个索引位置值均相同；
        let lastLocaleKeysLength = null;
        for (let localeName in localeKeysMap) {
            if (localeKeysMap.hasOwnProperty(localeName)) {
                if (lastLocaleKeysLength == null) {
                    lastLocaleKeysLength = localeKeysMap[localeName].length;
                } else {
                    if (localeKeysMap[localeName].length !== lastLocaleKeysLength) {
                        throw new Error(`The length of locale keys in UdeskLocales["${localeName}"] is different from others. Please check and make sure the keys of all languages are exactly the same.`);
                    }
                }
                localeKeysMap[localeName] = localeKeysMap[localeName].sort();
            }
        }

        let localesRepeatMapKeys = Object.keys(localeKeysMap);
        let firstLocaleKeys = localeKeysMap[localesRepeatMapKeys[0]];
        for (let localeName in localeKeysMap) {
            if (localeKeysMap.hasOwnProperty(localeName)) {
                if (localeName !== localesRepeatMapKeys[0]) {
                    let localeKeys = localeKeysMap[localeName];
                    for (let index = 0; index < firstLocaleKeys.length; index++) {
                        if (firstLocaleKeys[index] !== localeKeys[index]) {
                            throw new Error(
                                `The locale key \`${localeKeys[index]}\` in UdeskLocales["${localeName}"] doesn't match with UdeskLocales["${localesRepeatMapKeys[0]}"]. Please double checked if the locale key is wrong added (or misspelled) in ${localeName} or is missing in ${localesRepeatMapKeys[0]}.`);
                        }
                    }
                }
            }
        }

        this[LOCALES_MAP_SYMBOL] = localesMap;
        this[CURRENT_LANGUAGE_SYMBOL] = defaultLanguage;
        if (defaultLanguage !== null) {
            if (localesMap.hasOwnProperty(defaultLanguage)) {
                this[CURRENT_SYMBOL] = localesMap[defaultLanguage];
            }
        }
    }

    get current() {
        return this[CURRENT_SYMBOL];
    }

    get currentLanguage() {
        return this[CURRENT_LANGUAGE_SYMBOL];
    }

    get(key, languageCode) {
        if (key == null || key === "") {
            throw new Error(`${key}`);
        }
        let locales = this.getLocales(languageCode);
        if (locales == null) {
            locales = this.getLocales(this.currentLanguage);
        }
        if (locales) {
            return objectGet(locales, key) || "";
        }
        return "";
    }

    getLocales(languageCode) {
        languageCode = normalizeLanguage(languageCode);
        if (this[LOCALES_MAP_SYMBOL].hasOwnProperty(languageCode)) {
            return this[LOCALES_MAP_SYMBOL][languageCode];
        } else {
            return null;
        }
    }

    setLanguage(languageCode) {
        languageCode = normalizeLanguage(languageCode);
        if (this[LOCALES_MAP_SYMBOL].hasOwnProperty(languageCode)) {
            this[CURRENT_SYMBOL] = this[LOCALES_MAP_SYMBOL][languageCode];
            this[CURRENT_LANGUAGE_SYMBOL] = languageCode;
        }
    }

    /**
     * Translate the content of all `key` fields and saved the translated text to `outputField`.
     * @author LiFengbao <shijistar@hotmail.com>
     * @example <caption>Here's an example of how to translate field of multiple objects.</caption>
     *   let sourceObjs = [{
     *     name: "userName",
     *   }, {
     *     name: "mobile",
     *   }];
     *   
     *   let dictionary = {
     *     userName: "姓名",
     *     mobile: "手机"
     *   };
     *   
     *   translate(sourceObjs, "name", "displayText", dictionary);
     *   
     *   // sourceObjs:
     *   // [{
     *   //    name: "userName",
     *   //    displayText: "姓名"
     *   //  }, {
     *   //    name: "mobile",
     *   //    displayText: "手机"
     *   // }]
     * @param  {Array|Object} sourceObj - The source array or object (all child fields as array items) to translate.
     * @param  {String} sourceField - The field name to read content of translation sources, for instance `name` in above example.
     * @param  {String} outputField - The field name to save translation result, for instance `displayText` in above example.
     * @param  {Object} langDictionary - The dictionary that used to look up translation entries.
     * @returns {Array|Object} Returns the exactly same object of `sourceObj`.
     */
    translate(sourceObj, sourceField, outputField, langDictionary) {
        let objs = [];
        if (sourceObj instanceof Array) {
            objs = sourceObj;
        } else if (typeof sourceObj === "object") {
            let isAllChildObjects = false;
            let childObjs = [];
            for (let key in sourceObj) {
                if (sourceObj.hasOwnProperty(key)) {
                    let childObj = sourceObj[key];
                    if (typeof childObj === "object") {
                        childObjs.push(childObj);
                    } else {
                        isAllChildObjects = false;
                        break;
                    }
                }
            }
            if (isAllChildObjects) {
                objs = childObjs;
            } else {
                objs = [sourceObj];
            }
        } else {
            objs = [sourceObj];
        }
        for (let i = 0; i < objs.length; i++) {
            let obj = objs[i];
            translateSingle(obj, sourceField, outputField, langDictionary);
        }
        return sourceObj;
    }
}

function normalizeLanguage(language) {
    if (language == null) {
        return "";
    }
    if (typeof language !== "string") {
        language = language.toString();
    }
    return language.toUpperCase();
}

function getKeysRecursively(localObject) {
    let objectKeyArray = [];
    for (let key in localObject) {
        if (localObject.hasOwnProperty(key)) {
            if (typeof localObject[key] === "object") {
                let childObjectKeyArray = getKeysRecursively(localObject[key]);
                if (childObjectKeyArray.length > 0) {
                    childObjectKeyArray.forEach((childObjectKey) => {
                        objectKeyArray.push(`${key}.${childObjectKey}`);
                    });
                }
            } else {
                objectKeyArray.push(key);
            }
        }
    }
    return objectKeyArray;
}

function translateSingle(obj, sourceField, outputField, langDictionary) {
    let resourceKey = obj[sourceField];
    if (!obj[outputField]) {
        let translation = objectGet(langDictionary, resourceKey);
        if (translation) {
            obj[outputField] = translation;
        }
    }
}
module.exports = LocalesManagerClass;