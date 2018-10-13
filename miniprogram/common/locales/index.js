import LocalesManagerClass from './locales-manager.js';
import Chinese from './zh-cn.js';

const DEFAULT_LANGUAGE_CODE = "ZH-CN";
const localesStore = {
    "ZH-CN": Chinese,
};

export default new LocalesManagerClass(localesStore, DEFAULT_LANGUAGE_CODE);