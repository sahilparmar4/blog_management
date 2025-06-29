export function formatDate(dateString: string) {
  let date: Date;

  if (dateString.includes("/") && dateString.split("/").length === 3) {
    const [day, month, year] = dateString.split("/");
    date = new Date(`${year}-${month}-${day}`);
  } else {
    date = new Date(dateString);
  }

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("en-GB", options).toUpperCase();
}
