// components/information-item/index.js
Component({
    properties: {
        columns: {
            type: Array
        }
    },
    methods: {
        handleEvent(e) {
            let handleType = e.target.dataset.handleType;
            let handleIndex = e.target.dataset.index;
            let content = this.data.columns[handleIndex].content;
            if (handleType === "拨打") {
                wx.makePhoneCall({
                    phoneNumber: String(content),
                    success:function(){
                        console.log("success");
                    },
                    fail(){
                        console.log("fail");
                    }
                })
            } else if (handleType === "复制") {
                wx.setClipboardData({
                    data: content,
                    success:function(){
                        console.log("success");
                    },
                    fail:function(){
                        console.log("fail") ;
                    }
                })
            }
        }
    }
})