module.exports = function getMondayOfNthWeek(dateStr) {
  let year = Number(dateStr.slice(0, 4));
  let week = Number(dateStr.slice(6));
  let date = new Date(year, 0, 1);
  let dayOfWeek = date.getDay();
  let mondayDifference = 1 - dayOfWeek;

  let newDate = new Date(
    date.getFullYear(),
    0,
    date.getDate() + mondayDifference
  );

  if ([0, 4, 5, 6].includes(dayOfWeek)) {
    newDate.setDate(newDate.getDate() + week * 7);
  } else {
    newDate.setDate(newDate.getDate() + (week - 1) * 7);
  }

  let startDate = `${newDate.getFullYear()}-${
    newDate.getMonth() + 1 > 9
      ? newDate.getMonth() + 1
      : "0" + (newDate.getMonth() + 1)
  }-${newDate.getDate() > 9 ? newDate.getDate() : "0" + newDate.getDate()}`;

  newDate.setDate(newDate.getDate() + 7);

  let endDate = `${newDate.getFullYear()}-${
    newDate.getMonth() + 1 > 9
      ? newDate.getMonth() + 1
      : "0" + (newDate.getMonth() + 1)
  }-${newDate.getDate() > 9 ? newDate.getDate() : "0" + newDate.getDate()}`;

  return [startDate, endDate];
};
