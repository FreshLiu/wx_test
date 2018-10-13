//app.js
// const udeskWebToolkits=require('vendor/udesk-web-toolkits/udesk.js');
App({
    globalData:{
        "card":"名片"
    },
    onLaunch: function() {
        wx.login({
            success: function(res) {
                
            }
        })
    }
})