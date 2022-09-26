import request from './server/network.js'
import { TOKEN, SNO } from './server/const.js'
import redirectTo from './util/redirectTo'

App({
  globalData: {
    token: '',
    sno: ''
  },
  onLaunch: function () {
    const token = wx.getStorageSync(TOKEN);
    if (token && token.length !== 0) {
      this.check_token(token);
    } else {
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }
  },
  check_token(token) {
    console.log('执行了验证token操作')
    request({
      url: '/auth',
      method: 'post',
      data: { token },
    }).then(res => {
      if (!res.data.errCode) {
        this.globalData.token = token;
        this.globalData.sno = wx.getStorageSync(SNO);
        wx.switchTab({
          url: '/pages/index/index'
        })
      } else {
        redirectTo('/pages/login/login')
      }
    })
  }
})