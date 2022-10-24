import dayjs from 'dayjs';

export function checkExpiryDate(str) {
  const month = str.substring(0, 2);
  const year = str.substring(2, 4);

  const currentMonth = dayjs().format('MM');
  const currentYear = dayjs().format('YY');

  if (month <= 0 || month > 12) return false;
  if (year < currentYear) return false;
  if (year === currentYear && month < currentMonth) return false;

  return true;
}
