export function formatDate(dateString: string) {
  const [day, month, year] = dateString.split("/"); 
  const date = new Date(`${year}-${month}-${day}`);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("en-GB", options).toUpperCase();
}
