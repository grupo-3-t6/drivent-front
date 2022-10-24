import dayjs from 'dayjs';
import { toast } from 'react-toastify';

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

export function checkCardData(number, name, expiry, cvc) {
  let isDataCorrect = true;

  if (String(number).length < 16 || String(number).length > 22) {
    isDataCorrect = false;
    toast('Número do cartão inválido');
  }
  if (String(name) === '' || String(name).length < 5) {
    isDataCorrect = false;
    toast('Por favor, preencha o nome');
  }
  if (String(expiry).length !== 4) {
    isDataCorrect = false;
    toast('Data de validade incorreta');
  }

  if (String(cvc).length < 3 || String(cvc).length > 4) {
    isDataCorrect = false;
    toast('CVC incorreto');
  }

  return isDataCorrect;
}
