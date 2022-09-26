import redirectTo from '../../../../util/redirectTo';
Component({
  properties: {
    info: Object,
    darkModel: Boolean
  },
  data: {
    setType: ['分享软件', '退出登录', '意见反馈'],
    night: false
  },
  methods: {
    getSetting(e) {
      if (e.currentTarget.dataset.index === 1) {
        wx.clearStorage({
          success: () => {
            redirectTo('/pages/login/login')
          }
        });
      }
    },
    nightModel() {
      this.setData({
        night: !this.data.night
      })
      this.triggerEvent('nightModel', this.data.night);
    }
  },
})
