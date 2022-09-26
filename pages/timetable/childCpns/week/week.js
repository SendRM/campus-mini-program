let weekList = [];
for (var i = 1; i <= 20; i++) weekList.push(i);

Component({

  properties: {
    currentWeek: String
  },
  data: {
    week: weekList,
  },
  methods: {
    bindPickerChange(e) {
      let value = e.detail.value - 0 + 1;
      this.triggerEvent('pickerChange', value, {});
      this.setData({
        currentWeek: value
      })
    }
  }
})
