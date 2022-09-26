const date = new Date();
const years = [];
const months = [];
const days = [];
const hours = [];
getDate();

function initDate(array, start, end, str) {
  for (let i = start; i <= end; i++) {
    array.push(i + str);
  }
}
function getDate() {
  initDate(years, 1990, new Date().getFullYear() + 1, '年');
  initDate(months, 1, 12, '月');
  initDate(days, 1, 31, '日');
  initDate(hours, 0, 23, '时');
}
Component({
  properties: {

  },
  data: {
    multiArray: [years, months, days, hours],
    years,
    months,
    days,
    hours,
    value: [years.length - 2, date.getMonth(), date.getDate() - 1, date.getHours()]
  },
  methods: {
    bindMultiPickerChange: function (e) {
      let pickerStr = `${years[e.detail.value[0]]}${e.detail.value[1] + 1}月${e.detail.value[2] + 1}日${e.detail.value[3] + 1}时`
      this.setData({
        multiIndex: e.detail.value
      })
      this.triggerEvent('pickerChange', { pickerStr }, {})
    }
  }
})
