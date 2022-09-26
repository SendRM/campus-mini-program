import showToast from '../../../../util/showToast';
import { SNO } from '../../../../server/const';
Component({
  data: {
    info: [
      {
        type: '所在地点',
        tips: '如：三区九栋b楼',
        name: 'location'
      },
      {
        type: '报修房间',
        tips: '如：202',
        name: 'repairRoom'
      },
      {
        type: '联系人姓名',
        tips: '',
        name: 'contactName'
      },
      {
        type: '电话',
        tips: '',
        name: 'telephone'
      },
      {
        type: '预约时间',
        tips: '如：周三中午',
        name: 'appointmentTime'
      }
    ],
    content: {
      title: '报修内容',
      con: '请描述你所报修的故障问题',
      name: 'repairContent'
    },
    inputInfo: {
      location: '',
      repairRoom: '',
      contactName: '',
      telephone: '',
      appointmentTime: '',
    },
    textareaContent: '',
    relatedPictures: []
  },
  methods: {
    getValue(e) {
      this.setData({ inputInfo: e.detail });
    },
    getTextareaValue(e) {
      this.setData({ textareaContent: e.detail });
    },
    getImages(e) {
      this.setData({ relatedPictures: e.detail });
    },
    submitForm() {
      let inputInfo = this.data.inputInfo;
      let count = [];
      inputInfo.repairContent = this.data.textareaContent;
      for (let k in inputInfo) {
        if (inputInfo[k].length === 0) count.push(k);
      }
      if (count.length === 0) {
        inputInfo.relatedPictures = this.data.relatedPictures;
        inputInfo.sno = wx.getStorageSync(SNO);
        this.triggerEvent('submitForm', inputInfo, {})
      } else {
        showToast('请检查是否有输入为空')
      }
    }
  }
})
