import request from '../../server/network';
import handleImages from '../../util/handleImages';
import { SNO } from '../../server/const';

Page({
  data: {
    avatarUrl: ''
  },
  onLoad: function (options) {
    request({
      url: `/blog/user/${wx.getStorageSync(SNO)}`
    }).then(res => {
      if (res.data.user.avatarUrl.split('userImg')[1]) {
        this.setData({
          avatarUrl: res.data.user.avatarUrl.split('userImg')[1]
        })
      } else {
        this.setData({
          avatarUrl: res.data.user.avatarUrl
        })
      }
    })
  },
  submitForm(e) {
    if (e.detail.relatedPictures.length > 0) {
      handleImages(e.detail, 'relatedPictures', e.detail.relatedPictures, '/blog');
      wx.switchTab({
        url: '/pages/find/find'
      })
    } else {
      request({
        url: '/blog',
        method: 'post',
        data: e.detail
      }).then(res => {
        if (res.data.message != 'ok') return showToast(res.data.message);
        wx.switchTab({
          url: '/pages/find/find'
        })
      })
    }
  }
})