export default (start) => {
  var WEEKLEN = 7,
    WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"],
    weekInfo = { "week": null, "day": null },
    oneDay = 24 * 60 * 60 * 1000,
    weekLeave,
    weekStart,
    today,
    dateDiff,
    sDate;
  sDate = new Date(start.replace("-", "/"));
  weekStart = sDate.getDay();
  weekStart = weekStart === 0 ? 7 : weekStart;

  weekLeave = WEEKLEN - weekStart;
  today = new Date();
  weekInfo.day = WEEKDAYS[today.getDay()];
  today = new Date(today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate());
  dateDiff = today - sDate;
  dateDiff = parseInt(dateDiff / oneDay);
  weekInfo.week = Math.ceil((dateDiff - weekLeave) / WEEKLEN) + 1;
  return weekInfo;
}