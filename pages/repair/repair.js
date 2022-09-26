import request from '../../server/network.js';
import handleImages from '../../util/handleImages';
import showToast from '../../util/showToast';
import redirectTo from '../../util/redirectTo';

Page({
  submitForm(e) {
    if (e.detail.relatedPictures.length > 0) {
      handleImages(e.detail, 'relatedPictures', e.detail.relatedPictures, '/student/repair');
      redirectTo('/pages/repairResult/repairResult');
    } else {
      request({
        url: '/student/repair',
        method: 'post',
        data: e.detail
      }).then(res => {
        if (res.data.message != 'ok') return showToast(res.data.message);
        redirectTo('/pages/repairResult/repairResult');
      })
    }
  }
})