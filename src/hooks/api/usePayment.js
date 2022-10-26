import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function usePayment() {
  const token = useToken(); 

  const {
    data: getPaymentData,
    loading: getPaymentLoading,
    error: getPaymentError,
    act: getPayment,
  } = useAsync(() => paymentApi.getPayment(token));

  const {
    data: postPaymentData,
    loading: postPaymentLoading,
    error: postPaymentError,
    act: pay,
  } = useAsync(() => paymentApi.pay(token), false);

  return {
    getPaymentData,
    getPaymentLoading,
    getPaymentError,
    getPayment,
    postPaymentData,
    postPaymentLoading,
    postPaymentError,
    pay,
  };
}
