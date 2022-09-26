import request from '../../server/network';
import redirectTo from '../../util/redirectTo';
import { SNO } from '../../server/const';
Page({
  data: {
    leaves: []
  },
  onLoad: function (options) {
    const sno = wx.getStorageSync(SNO);
    request({
      url: `/student/leave/${sno}`
    }).then(res => {
      if (res.data.length === 0) return redirectTo('/pages/leave/leave');
      this.setData({
        leaves: res.data
      })
    })
  }
})