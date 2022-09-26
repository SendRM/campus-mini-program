import getInputValue from '../../util/getInputValue';
import showToast from '../../util/showToast';
Component({
  properties: {
    content: {
      type: Object,
      value: {}
    },
    textareaContent: String
  },
  methods: {
    getValue(e) {
      this.setData({ textareaContent: e.detail.value })
    },
    checkValue(e) {
      if (e.detail.value.length === 0) return showToast('内容为空');
      this.triggerEvent('getTextareaValue', this.data.textareaContent, {});
    }
  },
})
