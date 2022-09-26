import getInputValue from '../../util/getInputValue';
import showToast from '../../util/showToast';
const regtel = /^1[3|4|5|7|8]\d{9}$/;
Component({
  properties: {
    info: {
      type: Array,
      value: []
    },
    inputInfo: Object
  },
  externalClasses: ['cover'],
  methods: {
    getValue(e) {
      getInputValue(e, this, this.data.inputInfo);
    },
    checkValue(e) {
      let checkName = e.currentTarget.dataset.input;
      let checkValue = e.detail.value;
      switch (checkName) {
        case 'telephone':
          if (!regtel.test(checkValue)) showToast('请输入正确的电话');
          break;
        case 'contactName':
          if (checkValue.length < 2) showToast('输入的姓名有误');
          break;
        default:
          if (checkValue.length === 0) showToast('输入的值不能为空');
      };
      this.triggerEvent('getValue', this.data.inputInfo, {});
    },
  }
})
