import { createContext, useContext, useState } from 'react';

const PaymentContext = createContext();

export default PaymentContext;

export function usePaymentContext() {
  return useContext(PaymentContext);
}

export function PaymentProvider({ children }) {
  const [paymentData, setPaymentData] = useState(null);

  return <PaymentContext.Provider value={{ paymentData, setPaymentData }}>{children}</PaymentContext.Provider>;
}
