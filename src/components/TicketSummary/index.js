import Card from './Card';
import Subtitle from '../../layouts/Subtitle';
import SubtitleCard from '../../layouts/SubtitleCard';
import TextCard from '../../layouts/TextCard';
import { useTicketContext } from '../../contexts';
import { usePaymentContext } from '../../contexts/PaymentContext';

export default function TicketSummary() {
  const { ticketSelected, hotelOrNot } = useTicketContext();
  const { paymentData } = usePaymentContext();

  return (
    <>
      <Subtitle>Ingresso escolhido</Subtitle>
      <Card>
        {ticketSelected.name === 'Online' || paymentData?.ticket?.name === 'Online' ? <TextCard>{ ticketSelected.name || paymentData?.ticket.name }</TextCard> : <TextCard>{ ticketSelected.name || paymentData?.ticket.name } + { hotelOrNot.name || paymentData?.stay.name }</TextCard>}
        {ticketSelected.name === 'Online' || paymentData?.ticket?.name === 'Online' ? <SubtitleCard>R$ { ticketSelected.price || paymentData?.finalPrice }</SubtitleCard> : <SubtitleCard>R$ { (ticketSelected.price + hotelOrNot.price) || (paymentData?.finalPrice) }</SubtitleCard>}
      </Card>
    </>            
  );
}
