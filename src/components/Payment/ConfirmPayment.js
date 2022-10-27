import CreditCard from './CreditCard/CreditCard';
import Subtitle from '../../layouts/Subtitle';
import TicketSummary from '../TicketSummary/index';
import PaymentConfirmationMessage from './PaymentConfirmationMessage';
import { usePaymentContext } from '../../contexts/PaymentContext';

export default function ConfirmPayment() {
  const { paymentData } = usePaymentContext();

  return (
    <>
      <TicketSummary />
      <Subtitle>Pagamento</Subtitle>
      { paymentData ? <PaymentConfirmationMessage /> : <CreditCard />}
    </>
  );
}
