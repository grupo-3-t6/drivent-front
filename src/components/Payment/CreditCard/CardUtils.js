import dayjs from 'dayjs';
import { toast } from 'react-toastify';

export function checkExpiryDate(expiry) {
  const now = dayjs().format('MM/YY');

  if (dayjs(now).isAfter(dayjs(expiry))) {
    return false;
  }

  return true;
}

export function checkCardData(number, name, cvc) {
  let isDataCorrect = true;

  if (number.length < 16 || number.length > 22) {
    isDataCorrect = false;
    toast('Número do cartão inválido');
  }
  if (name === '' || name.length < 5) {
    isDataCorrect = false;
    toast('Por favor, preencha o nome');
  }

  if (cvc.length < 3 || cvc.length > 4) {
    isDataCorrect = false;
    toast('CVC incorreto');
  }

  return isDataCorrect;
}
