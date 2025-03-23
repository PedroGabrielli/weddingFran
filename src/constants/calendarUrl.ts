const startDate = "20250920T200000Z";
const endDate = "20250921T070000Z";
const title = encodeURIComponent("Boda Francisco y Adriana");
const location = encodeURIComponent("Salón Santa Barbara");
const details = encodeURIComponent("Celebración de la boda de Francisco y Adriana. ¡Te esperamos!");
export const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
