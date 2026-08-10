// miniprogram/pages/liferestart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  toRanking(e) {
    wx.navigateTo({
      url: 'ranking'
    })
  },
  toTalents(e) {
    wx.navigateTo({
      url: 'talents'
    })
  },
  onShareTimeline(e) {
    return {
      title: "人生重开模拟器",
      imageUrl: "../assets/images/cover.png",
    }
  },
  onShareAppMessage: function () {
    return {
      title: '人生重开模拟器',
      imageUrl: '../assets/images/cover.png',
      path: '/pages/index',
    }
  },
})