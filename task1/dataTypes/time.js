// Create a date
let date = new Date(2012, 1, 20, 3, 12);
alert(date);

// Show a weekday
function getWeekDay(date) {
  const days = ["SU","MO","TU","WE","TH","FR","SA"];
  return days[date.getDay()];
}

let date1 = new Date(2012, 0, 3);
alert(getWeekDay(date1)); // TU

// European weekday
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day;
}

alert(getLocalDay(date1)); // 2

// Which day of month was many days ago?
function getDateAgo(date, days) {
  let copy = new Date(date);
  copy.setDate(copy.getDate() - days);
  return copy.getDate();
}

let date2 = new Date(2015, 0, 2);
alert(getDateAgo(date2, 1));   // 1
alert(getDateAgo(date2, 2));   // 31
alert(getDateAgo(date2, 365)); // 2

// Last day of month?
function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

alert(getLastDayOfMonth(2012, 1)); // 29

// How many seconds have passed today?
function getSecondsToday() {
  let now = new Date();
  return now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds();
}

// How many seconds till tomorrow?
function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.round((tomorrow - now) / 1000);
}

// Format the relative date
function formatDate(date) {
  let diff = new Date() - date; // ms difference
  if (diff < 1000) return "right now";
  let sec = Math.floor(diff / 1000);
  if (sec < 60) return sec + " sec. ago";
  let min = Math.floor(diff / 60000);
  if (min < 60) return min + " min. ago";

  let d = date;
  let day = String(d.getDate()).padStart(2,'0');
  let month = String(d.getMonth()+1).padStart(2,'0');
  let year = String(d.getFullYear()).slice(-2);
  let hours = String(d.getHours()).padStart(2,'0');
  let minutes = String(d.getMinutes()).padStart(2,'0');

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

// Examples
alert(formatDate(new Date(new Date() - 1)));          // "right now"
alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"
alert(formatDate(new Date(new Date() - 5*60000)));   // "5 min. ago"
alert(formatDate(new Date(new Date() - 86400*1000))); // full date yesterday