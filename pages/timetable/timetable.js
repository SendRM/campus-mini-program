import getCurrentWeek from '../../util/getCurrentWeek';
import getDate from '../../util/getDate';

let dateList = getDate('2021-09-14');
let currentWeek = getCurrentWeek("2021/09/14");
let dataArr = dateList[currentWeek];
// console.log(dateList);
Page({
  data: {
    dataArr,
    currentWeek: currentWeek.week,
    colorArrays: ["#FDBB2F", "#2FC27B", "#379EFB", "#FA5A5A", "#7064EC", "#FA802B", "#FA9492", "#6FCDEF", '#ccc'],
    wlist: [
      { "week": 1, "class": 1, "course": "网络编程@F405" },
      { "week": 2, "class": 3, "course": "网络编程@F405" },
      { "week": 4, "class": 5, "course": "网络编程@F405" },
      { "week": 3, "class": 1, "course": "网络编程@F405" },
      { "week": 5, "class": 1, "course": "网络编程@F405" },
    ],
    left: [65, 200, 336, 475, 612],
    top: [228, 447, 666, 889, 1109]
  },
  // onLoad(e) {

  // },
  pickerChange(e) {
    this.setData({
      currentWeek: e.detail,
      dataArr: dateList[this.data.currentWeek]
    })
    console.log(this.data.dataArr);
  }
})