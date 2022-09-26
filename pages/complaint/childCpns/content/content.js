// pages/complaint/childCpns/content/content.js
Component({
  data: {
    info: [
      {
        type: '联系电话',
        tips: '请填写联系电话',
        name: 'telephone'
      }
    ],
    content: {
      title: '投诉内容',
      con: '请描述你要投诉的食品问题'
    },
    inputInfo: {
      telephone: '',
      relatedPictures: []
    }
  },
  methods: {
    getValue(e) {
      if (e.detail.telephone) {
        this.setData({
          'inputInfo.telephone': e.detail.telephone
        });
      } else if (e.detail instanceof Array) {
        this.setData({
          'inputInfo.relatedPictures': e.detail
        });
      } else {
        this.setData({
          'inputInfo.complaintContent': e.detail
        });
      }
      this.triggerEvent('getValue', this.data.inputInfo, {});
    }
  }
})
