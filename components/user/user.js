import { imgUrl } from '../../server/config';
Component({
  options: {
    styleIsolation: "apply-shared"
  },
  properties: {
    nickName: String,
    avatarUrl: String,
    modifyAvatar: String
  },
  data: {
    updateUrl: '',
    url: imgUrl + '/userImg'
  },
  methods: {
    updateAvatar() {
      this.triggerEvent('updateAvatar');
    }
  },
  observers: {
    'avatarUrl': function (val) {
      val = val.split('userImg')[1] && val.split('userImg')[1];
      this.setData({
        updateUrl: val
      })
    }
  }
})
