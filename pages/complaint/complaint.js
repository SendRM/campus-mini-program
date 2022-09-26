import request from '../../server/network';
import handleImages from '../../util/handleImages';
import showToast from '../../util/showToast';
import redirectTo from '../../util/redirectTo';
import { SNO } from '../../server/const';
const regtel = /^1[3|4|5|7|8]\d{9}$/;
Page({
  data: {
    inputInfo: {}
  },
  getValue(e) {
    let obj = Object.assign(this.data.inputInfo, e.detail);
    this.setData({
      inputInfo: obj
    })
  },
  submit() {
    let temp = this.data.inputInfo;
    temp.sno = wx.getStorageSync(SNO);
    if (Object.keys(temp).length < 4) return showToast('请检查输入的值');
    if (temp.relatedPictures.length > 0) {
      handleImages(temp, 'relatedPictures', temp.relatedPictures, '/student/complaint');
      return redirectTo('/pages/complaintResult/complaintResult');
    }
    if (temp.complaintType && temp.complaintCanteen && temp.complaintContent && regtel.test(temp.telephone)) {
      request({
        url: '/student/complaint',
        method: 'post',
        data: temp
      }).then(res => {
        if (res.data.message != 'ok') return showToast(res.data.message);
        redirectTo('/pages/complaintResult/complaintResult');
      })
    } else {
      showToast('请检查输入的值')
    }
  }
})