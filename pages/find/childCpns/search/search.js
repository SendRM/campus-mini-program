
Component({
  properties: {

  },

  data: {
    inputValue: '',
    type: ['全部','失物招领','日常','学习']
  },
  methods: {
    add() {
      wx.navigateTo({
        url: '/pages/publishStatus/publishStatus'
      })
    },
    getValue(e) {
      this.setData({
        inputValue: e.detail
      })
    },
    submitKeyword() {
      this.triggerEvent('submitKeyword', this.data.inputValue);
    },
  }
})
