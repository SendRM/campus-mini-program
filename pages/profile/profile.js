import request from '../../server/network';
import { SNO, NIGHT } from '../../server/const';
import { baseURL } from '../../server/config';

Page({
  data: {
    nickName: '',
    avatarUrl: '',
    info: {},
    darkModel: wx.getStorageSync(NIGHT)
  },
  onLoad: function (options) {
    request({
      url: `/blog/user/${wx.getStorageSync(SNO)}`
    }).then(res => {
      this.setData({
        nickName: res.data.user.nickName,
        avatarUrl: res.data.user.avatarUrl,
        info: res.data.user.info
      })
    })
  },
  onShow: function () {
    this.onLoad();
  },
  onShareAppMessage: function () {
    return {
      title: '东软人都在用的小程序'
    }
  },
  updateAvatar(e) {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        wx.uploadFile({
          url: `${baseURL}/blog/user/avatar`,
          filePath: res.tempFilePaths[0],
          name: 'file',
          formData: { sno: wx.getStorageSync(SNO) },
          header: { "Content-Type": "multipart/form-data" },
          success: (res) => {
            const modifyAvatar = JSON.parse(res.data).user.avatarUrl;
            let edit = this.selectComponent('.edit');
            edit.getUpdateAvatar(modifyAvatar);
          }
        })
      }
    })
  },
  nightModel(e) {
    wx.setStorageSync(NIGHT, e.detail);
    this.setData({
      darkModel: wx.getStorageSync(NIGHT)
    })
  }
})