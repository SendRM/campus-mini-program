import request from '../../server/network';
import showToast from '../../util/showToast';
import { SNO } from '../../server/const';

Page({
  data: {
    nickName: ''
  },
  onLoad: function (options) {
    request({
      url: `/blog/user/${wx.getStorageSync(SNO)}`
    }).then(res => {
      this.setData({
        nickName: res.data.user.nickName,
      })
    })
  },
  getValue(e) {
    this.setData({
      nickName: e.detail.value
    })
  },
  submitName() {
    let nickName = this.data.nickName;
    if (nickName.trim().length === 0) return showToast('最少输入一个字符');
    request({
      url: '/blog/user/nickname',
      method: 'put',
      data: { sno:wx.getStorageSync(SNO), nickName }
    }).then(res => {
      wx.switchTab({
        url: '/pages/profile/profile'
      })
    })
  }
})