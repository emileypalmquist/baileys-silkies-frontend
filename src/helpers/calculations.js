function calculateDateDiffFromToday(date) {
  return new Date() - new Date(date);
}

export function calculateWeeks(date) {
  return Math.floor(
    calculateDateDiffFromToday(date) / (7 * 24 * 60 * 60 * 1000)
  );
}

export function convertDaysToWeeks(days) {
  return Math.floor(days / 7);
}

export function calculateDays(date) {
  return (
    Math.floor(calculateDateDiffFromToday(date) / (24 * 60 * 60 * 1000)) - 1
  );
}

export function displayAge(hatchDate) {
  let days = calculateDays(hatchDate);
  if (days > 7) {
    let weeks = convertDaysToWeeks(days);
    let text = weeks > 1 ? "weeks" : "week";
    return `${weeks} ${text}`;
  } else {
    let text = days > 1 ? "days" : "day";
    return `${days} ${text}`;
  }
}
