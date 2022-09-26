import showToast from '../../../../util/showToast';
Component({
  properties: {

  },
  data: {
    sno: '',
    pwd: '',
    clearSno: false,
    clearPwd: false,
    inputSno: null,
    inputPwd: null
  },
  methods: {
    getSno(e) {
      let sno = e.detail.value.trim();
      this.setData({
        sno,
        clearSno: 'clearSno'
      })
    },
    getPwd(e) {
      let pwd = e.detail.value.trim();
      this.setData({
        pwd,
        clearPwd: 'clearPwd'
      })
    },
    cancel(e) {
      const data = e.currentTarget.dataset;
      this.setData({
        [data.cancel]: ''
      })
    },
    hidden(e) {
      const data = e.currentTarget.dataset;
      this.setData({
        [data.hidden]: false
      })
    },
    checkValue() {
      return (this.data.sno.length !== 11) || (this.data.pwd.length < 6);
    },
    login(e) {
      if (this.checkValue()) return showToast('请输入正确的信息');
      if (this.data.sno.length === 11 && this.data.pwd.length === 6) {
        if (e.detail.errMsg.split(':')[1] !== 'ok') return showToast('授权失败');
        let userInfo = e.detail.userInfo;
        userInfo.sno = this.data.sno;
        userInfo.pwd = this.data.pwd;
        this.triggerEvent('login', userInfo, {});
      } else {
        showToast('请输入正确的信息');
      }
    },
  }
})
