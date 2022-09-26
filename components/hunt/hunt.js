import showToast from '../../util/showToast';

Component({
  properties: {
    keyword: String
  },
  data: {
    inputValue: ''
  },
  options: {
    styleIsolation: "apply-shared"
  },
  externalClasses: ['focus-ico', 'focus'],
  methods: {
    getValue(e) {
      this.setData({
        inputValue: e.detail.value
      })
      this.triggerEvent('getValue', e.detail.value, {})
    },
    submitKeyword(e) {
      if (this.data.inputValue.trim().length === 0) return showToast('请输入内容');
      this.triggerEvent('submitKeyword')
    },
    getBlur() {
      this.triggerEvent('getBlur')
    }
  },
})
