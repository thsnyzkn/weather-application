export function formatDateToHour(dateString) {
  const date = new Date(dateString);
  const hour = (date.getHours() < 10 ? "0" : "") + date.getHours();
  const minute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  return `${hour}:${minute}`;
}
