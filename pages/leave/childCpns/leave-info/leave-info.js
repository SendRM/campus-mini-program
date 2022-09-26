import formatDate from '../../../../util/formatDate';
import showToast from '../../../../util/showToast';
import getInputValue from '../../../../util/getInputValue';
let date = formatDate(new Date(), '-');
const regtel = /^1[3|4|5|7|8]\d{9}$/;
const regType = /^['事假'|'病假']{2}$/;
Component({
  properties: {
    student: Object
  },
  data: {
    applicationTime: date,
    annex: [],
    imagesCount: 0,
    contactNumber: 0,
    leaveDays: 0,
    leaveType: '',
    leaveReason: '',
    startTime: '',
    endTime: ''
  },
  methods: {
    getValue(e) {
      getInputValue(e, this);
    },
    getPic() {
      wx.chooseImage({
        count: 3,
        success: (res) => {
          this.setData({
            annex: res.tempFilePaths,
            imagesCount: res.tempFilePaths.length
          })
        }
      })
    },
    pickerChange(e) {
      let time = e.currentTarget.dataset.time;
      this.setData({
        [time]: e.detail.pickerStr
      })
    },
    checkValue(e) {
      let checkName = e.currentTarget.dataset.input
      let checkValue = e.detail.value;
      switch (checkName) {
        case 'contactNumber':
          if (!regtel.test(checkValue)) showToast('请输入正确的电话');
          break;
        case 'leaveDays':
          let days = parseFloat(checkValue);
          if (!days) showToast('天数输入有误');
          break;
        case 'leaveType':
          if (!regType.test(checkValue)) showToast('请假类型输入有误');
          break;
        case 'leaveReason':
          if (checkValue.trim().length > 100) return showToast('字数限制为100字');
          break;
      }
    },
    submitForm() {
      console.log(this.student);
      this.checkForm();
    },
    checkForm() {
      if (regtel.test(this.data.contactNumber) && regType.test(this.data.leaveType) && parseFloat(this.data.leaveDays)
        && this.data.leaveReason.length < 100 && this.data.startTime != '' && this.data.endTime != '') {
        this.triggerEvent('submitForm', this.data, {});
      } else {
        showToast('信息输入有误');
      }
    }
  }
})
