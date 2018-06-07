import {
  eachDay,
  startOfMonth,
  endOfMonth,
  getISODay,
  getDay,
  getDate,
  getMonth,
  isBefore
} from "date-fns";

function dayOfWeekLabel(singleDate) {
  /* Sunday is first cause getDay works with american stile week*/
  const daysLabels = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  const day = getDay(singleDate);
  return daysLabels[day];
}

function monthLabel(date) {
  const month = getMonth(date);
  const monthes = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь"
  ];

  return monthes[month];
}

export default function getEachDateOfMonth(date) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);

  const wholeMonth = eachDay(monthStart, monthEnd);

  /* Keys in object will be dates */
  const dates = wholeMonth.reduce(function(map, singleDate) {
    map[getDate(singleDate)] = {
      day: getISODay(singleDate),
      dateLabel:
        getDate(singleDate) +
        " " +
        monthLabel(singleDate) +
        ", " +
        dayOfWeekLabel(singleDate),
      month: getMonth(singleDate),
      past: isBefore(singleDate, date),
      inDatesRange: false
    };
    return map;
  }, {});

  return dates;
}
