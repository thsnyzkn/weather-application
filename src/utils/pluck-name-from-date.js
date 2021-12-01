export function pluckNameFromDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-de", { weekday: "long" });
}
