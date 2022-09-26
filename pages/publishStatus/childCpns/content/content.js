import showToast from '../../../../util/showToast';
import { USER } from '../../../../server/const';
Component({
  properties: {

  },
  data: {
    info: {
      type: '',
      relatedPictures: [],
      content: ''
    },
    chooseImg: false,
    type: [{
      name: '学习', touch: '', disable: ''
    },
    {
      name: '日常', touch: '', disable: ''
    }, {
      name: '失物招领', touch: '', disable: ''
    }]
  },
  methods: {
    chooseImg() {
      this.setData({
        chooseImg: !this.data.chooseImg
      })
    },
    getImages(e) {
      this.setData({ 'info.relatedPictures': e.detail });
    },
    getContent(e) {
      this.setData({ 'info.content': e.detail.value.trim() });
    },
    typeClick(e) {
      let index = e.currentTarget.dataset.index;
      let type = this.data.type;
      type.forEach(item => {
        item.touch = '';
        item.disable = 'disable'
      });
      type[index].touch = 'touch';
      type[index].disable = '';
      this.setData({
        type,
        'info.type': type[index].name
      })
    },
    submitForm() {
      let content = this.data.info.content;
      if (content.length === 0) return showToast('请输入内容');
      if (content.length > 200) return showToast('输入内容限制为200字');
      let data = this.data.info;
      data.author =  wx.getStorageSync(USER);
      this.triggerEvent('submitForm', data, {})
    }
  }
})
