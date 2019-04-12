wx.cloud.init()
const db=wx.cloud.database()

// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    hide: true
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },

  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },

  search: function (e) {
    var self = this;
    var temp2=this.data.inputVal
    console.log(temp2)
    db.collection('posts').where({

    })
      .get({
        success(res) {
          var temp = {}
          var temp1 = {}
          temp = res.data
          console.log(temp)
          console.log(temp2)
          for (var i = 0; i < temp.length; i++) {
            if (temp[i].stuff_name.indexOf(temp2) != -1) {
              temp1[i] = temp[i]
            }
          }
          console.log(temp1)
          self.setData({
            currentList: temp1,
          })
        }
      })
  },

  detailTap: function (e) {
    var detail = e.currentTarget.dataset.anchorobj
    if (detail.ifidcard == 1 || detail[0].img[0] == "/images/ava.png" || detail[0].img[0] == "/images/lost.png") {
      detail.display = false
    } else {
      detail.display = true
    }
    let str = JSON.stringify(detail)
    wx.navigateTo({
      url: '/pages/show/show?check=0&obj=' + str,
    })
  },

  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
    console.log(this.data.inputVal)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.query)
    var self = this;
    var temp={} 
    var temp1={}
    wx.showLoading({
      title: '加载中',
      success(res) {
        self.setData({
          hide: true
        })
      }
    })
    db.collection('posts').where({
      
    })
      .get({
        success(res) {
          var temp={}
          var temp1={}
          temp=res.data
          console.log(temp)
          for(var i=0;i<temp.length;i++)
          {
            if(temp[i].stuff_name.indexOf(options.query)!=-1)
              {
                temp1[i]=temp[i]
              }
          }
          console.log(temp1)
          self.setData({
            currentList: temp1,
          })
        }
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
    var self = this
    setTimeout(function () {
      wx.hideLoading()
      self.setData({
        hide: false
      })
    }, 2000)
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