import moment from "moment";
moment.locale("ky");

function formatLastDigits(digits) {
  return digits ? `${digits.substring(0, 2)} ${digits.substring(2, digits.length)}` : "";
}

function formatDate(date, hours) {
  let formatedDate = moment(date, "DD.MM.YYYY").format("DD MMM");
  let formatedHours = moment(hours, "HH:mm:ss").format("HH:mm");
  return `${formatedDate} / ${formatedHours}`;
}

function formatPrice(price) {
  let parts = price.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".") + " ₽";
}

export {formatLastDigits, formatDate, formatPrice};
