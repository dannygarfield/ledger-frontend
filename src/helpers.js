export function formatDate(inputDate) {
  let options = { timeZone: 'UTC' };
  let [month, day, year] = new Date(inputDate).toLocaleDateString("en-US", options).split("/");
  if (month.length < 2) {
      month = '0' + month;
  }
  if (day.length < 2) {
      day = '0' + day;
  }
  return [year, month, day].join("-");
}
