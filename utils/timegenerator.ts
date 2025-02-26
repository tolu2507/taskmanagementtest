export function roundToNearestHalfHour(timeString: any) {
  // Extract the parts of the time using a regular expression
  const timeParts = timeString.match(/(\d{1,2}):(\d{2}):(\d{2}) (\w{2})/);

  // If the time string doesn't match the expected format, return an error
  if (!timeParts) {
    throw new Error("Invalid time format");
  }

  let hours = parseInt(timeParts[1], 10);
  let minutes = parseInt(timeParts[2], 10);
  let seconds = parseInt(timeParts[3], 10);
  let period = timeParts[4];

  // Convert to 24-hour format
  if (period === "PM" && hours !== 12) {
    hours += 12; // Convert PM hours to 24-hour format
  } else if (period === "AM" && hours === 12) {
    hours = 0; // Handle 12 AM case
  }

  // Round the minutes to the nearest 30-minute interval
  if (minutes < 15 || (minutes === 0 && seconds < 30)) {
    minutes = 0;
  } else if (minutes < 45 || (minutes >= 15 && minutes < 30 && seconds < 30)) {
    minutes = 30;
  } else {
    minutes = 0;
    hours = (hours + 1) % 24; // Move to the next hour if minutes are 45 or above
  }

  // Convert back to 12-hour format
  let ampm = "AM";
  if (hours >= 12) {
    ampm = "PM";
  }
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours; // Handle case for 12 AM/PM

  // Format minutes to always have two digits
  const formattedMinutes = minutes.toString().padStart(2, "0");

  // Return time in the format: HH:MM AM/PM
  return `${hours}:${formattedMinutes} ${ampm}`;
}

// Example usage:
console.log(roundToNearestHalfHour("2:54:30 PM")); // "02:30 PM"
console.log(roundToNearestHalfHour("11:11:30 AM")); // "11:00 AM"
console.log(roundToNearestHalfHour("3:59:30 PM")); // "04:00 PM"
console.log(roundToNearestHalfHour("8:42:00 AM")); // "08:30 AM"
