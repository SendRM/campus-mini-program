// pages/complaint/childCpns/select/select.js
Component({
  data: {
    complaint: [
      {
        type: '投诉类型',
        tips: '请选择投诉类型'
      },
      {
        type: '投诉饭堂',
        tips: '请选择投诉饭堂'
      }
    ],
    complaintReasons: {
      complaintType: ['食品卫生', '食品质量', '食品价格', '服务质量'],
      complaintCanteen: ['一区一楼食堂', '一区二楼食堂', '二区一楼食堂', '二区二楼食堂', '二区三楼食堂']
    },
    pickerData: {}
  },
  methods: {
    bindPickerChange(e) {
      if (e.currentTarget.dataset.picker === 'complaintType') {
        this.setData({
          'pickerData.complaintType': this.data.complaintReasons.complaintType[e.detail.value],
          'complaint[0].tips': this.data.complaintReasons.complaintType[e.detail.value]
        })
      } else {
        this.setData({
          'pickerData.complaintCanteen': this.data.complaintReasons.complaintCanteen[e.detail.value],
          'complaint[1].tips': this.data.complaintReasons.complaintCanteen[e.detail.value]
        })
      }
      this.triggerEvent('pickerChange', this.data.pickerData, {});
    }
  }
})
