// pages/profile/childCpns/edit/edit.js
Component({
  properties: {
    nickName: String,
    avatarUrl: String
  },
  data: {
    modifyAvatar: ''
  },
  methods: {
    modifyName() {
      wx.navigateTo({
        url: '/pages/modifyNickname/modifyNickname'
      })
    },
    updateAvatar(e) {
      this.triggerEvent('updateAvatar', e.detail);
    },
    getUpdateAvatar(e) {
      this.setData({
        modifyAvatar: e.split('userImg')[1]
      })
    }
  },
})
