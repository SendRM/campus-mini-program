import request from '../../server/network';
import showToast from '../../util/showToast';
import backHome from '../../util/backHome';
import { TOKEN, SNO, USER } from '../../server/const';

const app = getApp();

Page({
  login(e) {
    console.log('执行了登录操作');
    let sno = e.detail.sno;
    let pwd = e.detail.pwd;
    let avatarUrl = e.detail.avatarUrl;
    let nickName = e.detail.nickName;
    wx.login({
      success: (res) => {
        const code = res.code;
        request({
          url: '/login',
          method: 'post',
          data: { sno, pwd, code, avatarUrl, nickName },
        }).then(res => {
          if (res.data.error) return showToast(res.data.error)
          const token = res.data.token;
          const user = res.data.user;
          app.globalData.token = token;
          app.globalData.sno = sno;
          app.globalData.user = user;
          wx.setStorageSync(TOKEN, token);
          wx.setStorageSync(SNO, sno);
          wx.setStorageSync(USER, user);
          backHome();
        })
      }
    })
  },
})
