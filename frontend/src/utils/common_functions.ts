const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatDate(timestamp: string): string {
  const date = new Date(timestamp);

  // Extract day, month, and year
  const day: string = String(date.getDate()).padStart(2, "0");
  const month: string = months[date.getMonth()];
  const year: number = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else {
    return text;
  }
}

export function getDateAndMonth(timestamp: string): string {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  return `${day} ${month}`;
}

export function checkToken() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("jwt_token");
    if (!token) {
      return null;
    } else {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload;
    }
  }
}
