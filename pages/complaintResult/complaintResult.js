import request from '../../server/network'
import { imgUrl } from '../../server/config'
import redirectTo from '../../util/redirectTo';
import { SNO } from '../../server/const';

Page({
  data: {
    complaints: [],
    url: ''
  },
  onLoad: function (options) {
    let sno = wx.getStorageSync(SNO);
    request({
      url: `/student/complaint/${sno}`,
    }).then(res => {
      if (res.data.length === 0) return redirectTo('/pages/complaint/complaint');
      res.data.forEach(item => {
        if (item.relatedPictures.length) {
          for (let i = 0; i < item.relatedPictures.length; i++) {
            item.relatedPictures[i] = item.relatedPictures[i].split('complaintImg')[1];
          }
        }
      })
      this.setData({
        complaints: res.data,
        url: imgUrl + '/complaintImg'
      })
    })
  }
})