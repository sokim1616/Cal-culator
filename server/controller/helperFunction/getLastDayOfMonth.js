module.exports = function getLastDayOfMonth(month, year) {
  if (+month === 2) {
    if (+year % 4 === 0) {
      return "29";
    }
    return "28";
  }
  if ([1, 3, 5, 7, 8, 10, 12].includes(+month)) {
    return "31";
  }
  if ([4, 6, 9, 11].includes(+month)) {
    return "30";
  }
};
