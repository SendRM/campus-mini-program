export default (date) => {
  let dateList = {};
  let newDateList = {};
  let splitArr = date.split('-');
  let startYear = splitArr[0] - 0;
  let startMonth = splitArr[1] - 0;
  let startDay = splitArr[2] - 0;
  for (var i = 1; i <= 24; i++) {
    if (startDay < 25) {
      if (i != 1) startDay += 7;
      dateList[i] = getDateArr(`${startYear}-${startMonth}-${startDay}`);
      // console.log(`${startYear}-${startMonth}-${startDay}`);
    } else {
      startDay = startDay % 30;
      dateList[i] = getDateArr(`${startYear}-${startMonth}-${startDay}`);
      // console.log(`${startYear}-${startMonth}-${startDay}`);
      startDay = 1;
      startMonth++;
      if (startMonth > 12) {
        startYear++;
        startMonth = 1;
      }
    }
    if (i % 4 == 0) {
      delete dateList[i]
    }
  }
  return dateList;
}

function getDateArr(date) {
  var now = new Date(date);
  var nowTime = now.getTime();
  var day = now.getDay() || 7;
  var oneDayLong = 24 * 60 * 60 * 1000;
  var MondayTime = nowTime - (day - 1) * oneDayLong;
  let dateArr = [];

  for (let i = 0; i < 7; i++) {
    var tmpDate = new Date(MondayTime);
    tmpDate = tmpDate.setDate(tmpDate.getDate() + i);
    tmpDate = new Date(tmpDate);

    var mondayDateStr = (tmpDate.getMonth() + 1) + '月';
    mondayDateStr += tmpDate.getDate();
    let days = tmpDate.getDay();
    switch (days) {
      case 1:
        days = '周一';
        break;
      case 2:
        days = '周二';
        break;
      case 3:
        days = '周三';
        break;
      case 4:
        days = '周四';
        break;
      case 5:
        days = '周五';
        break;
      case 6:
        days = '周六';
        break;
      case 0:
        days = '周日';
        break;
    }
    dateArr.push({ date: mondayDateStr, day: days })
  }
  return dateArr;
}