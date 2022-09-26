import { imgUrl } from '../../../../server/config';

Component({
  properties: {
    avatarUrl: String
  },
  data: {
    url: imgUrl + '/userImg',
    avatar: ''
  },
  methods: {
    back() {
      wx.navigateBack({
        delta: 1
      })
    }
  },
  observers: {
    'avatarUrl': function (val) {
    if (val.split('https')[1]){
      this.setData({
        avatar: val
      })
    }
    }
  }
})
