Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nologin: "",
    avatarUrl: "",
    nickName: "",
    broadcasturl: "",
    userInfo: null
  },

  about: function () {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },

  student: function () {
    wx.navigateTo({
      url: '/pages/stuverify/stuverify',
    })
  },

  mine: function () {
    wx.navigateTo({
      url: this.data.broadcasturl,
    })
  },

  onLoad: function (options) {
    console.log('onload')
    console.log(getApp().globalData.userInfo)
  },

  onShow: function () {
    var app = getApp()
    var that = this
    console.log(getApp().globalData.userInfo)
      console.log('glbdata is not null')
      console.log(getApp().globalData)
      this.setData({
        avatarUrl: getApp().globalData.userInfo.avatarUrl,
        nickName: getApp().globalData.userInfo.nickName,
        nologin: "",
        broadcasturl: "/pages/my_stuff/my_stuff"
      })
    
  }

})