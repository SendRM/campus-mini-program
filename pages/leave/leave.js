import request from '../../server/network';
import handleImages from '../../util/handleImages';
import redirectTo from '../../util/redirectTo';
import { SNO } from '../../server/const';
Page({
  data: {
    student: {}
  },
  onLoad: function (options) {
    const sno = wx.getStorageSync(SNO);
    request({
      url: `/student/leave/info/${sno}`
    }).then(res => {
      this.setData({
        student: res.data
      })
    })
  },
  submitForm(e) {
    let leaveInfo = Object.assign(this.data.student, e.detail);
    delete leaveInfo.student;
    if (e.detail.annex.length > 0) {
      handleImages(leaveInfo, 'annex', e.detail.annex, '/student/leave');
      redirectTo('/pages/leaveResult/leaveResult');
    } else {
      request({
        url: '/student/leave',
        method: 'post',
        data: leaveInfo
      }).then(res => {
        redirectTo('/pages/leaveResult/leaveResult');
      })
    }
  }
}
)