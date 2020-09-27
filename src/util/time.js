export function formatHour(hour) {
    if (hour === null || isNaN(hour)) return "";
    if(hour == 25) return "Overnight"
    return hour.toString().padStart(2, "0") + ":00";
}

export function formatRange(range) {
    if (!range) return "";
    return formatHour(range.start) + " - " + formatHour(range.end);
}