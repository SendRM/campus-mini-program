import request from '../../server/network'
import { imgUrl } from '../../server/config';
import redirectTo from '../../util/redirectTo';
import { SNO } from '../../server/const';
Page({
  data: {
    repairs: [],
    url: ''
  },
  onLoad: function (options) {
    let sno = wx.getStorageSync(SNO);
    request({
      url: `/student/repair/${sno}`
    }).then(res => {
      if (res.data.length === 0) return redirectTo('/pages/repair/repair');
      res.data.forEach(item => {
        if (item.relatedPicture.length) {
          for (let i = 0; i < item.relatedPicture.length; i++) {
            item.relatedPicture[i] = item.relatedPicture[i].split('repairImg')[1];
          }
        }
      })
      this.setData({
        repairs: res.data,
        url: imgUrl + '/repairImg'
      })
    })
  }
})