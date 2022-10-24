import CreditCard from './CreditCard/CreditCard';
import Subtitle from '../../layouts/Subtitle';
import TicketSummary from '../TicketSummary/index';

export default function ConfirmPayment() {
  return (
    <>
      <TicketSummary />
      <Subtitle>Pagamento</Subtitle>
      <CreditCard />
    </>
  );
}
