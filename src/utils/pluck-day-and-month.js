export function pluckDayAndMonth(dateString) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(dateString);
  const dateNumber = date.getDate();
  const month = months[date.getMonth()];

  return `${dateNumber}. ${month}`;
}
