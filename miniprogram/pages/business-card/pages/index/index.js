// pages/business-card/pages/index/index.js
Page({
    data: {
        togglePull: false,
        information: {
            title: "UDESK",
            name: "张德江",
            position: "销售总监",
            avatar: "http://img3.imgtn.bdimg.com/it/u=3902970703,3457759336&fm=214&gp=0.jpg",
            telephone: 13012345678,
            email: "liu14183@udesk.cn"
        },
        detail: [{
            title: "电话",
            content: 18242984166,
            handle: "拨打"
        }, {
            title: "微信",
            content: "lin14183",
            handle: "复制"
        }, {
            title: "邮件",
            content: "liu4183@udesk.cn",
            handle: "复制"
        }, {
            title: "公司",
            content: "北京沃丰时代数据科技有限公司",
            handle: "复制"
        }, {
            title: "地址",
            content: "北京市西城区西直门南大街2号成铭大厦C座1705",
            handle: "复制"
        }, {
            title: "地址",
            content: "北京市西城区西直门南大街2号成铭大厦C座1705",
            handle: "复制"
        }]
    },
    toggle() {
        this.setData({
            togglePull: !this.data.togglePull
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var globalData = getApp();
        wx.setNavigationBarTitle({
            title: globalData.globalData.card,
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})