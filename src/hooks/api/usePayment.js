import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';
import useTicketBody from '../useTicketBody';

export default function usePayment() {
  const token = useToken();
  const body = useTicketBody(); 

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
  } = useAsync(() => paymentApi.pay(body, token), false);

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
