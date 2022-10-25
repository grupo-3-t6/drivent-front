import Card from './Card';
import Subtitle from '../../layouts/Subtitle';
import SubtitleCard from '../../layouts/SubtitleCard';
import TextCard from '../../layouts/TextCard';
import { useTicketContext } from '../../contexts';

export default function TicketSummary() {
  const { ticketSelected, hotelOrNot } = useTicketContext();

  return (
    <>
      <Subtitle>Ingresso escolhido</Subtitle>
      <Card>
        {ticketSelected.name === 'Online' ? <TextCard>{ ticketSelected.name }</TextCard> : <TextCard>{ ticketSelected.name } + { hotelOrNot.name }</TextCard>}
        {ticketSelected.name === 'Online' ? <SubtitleCard>R$ { ticketSelected.price }</SubtitleCard> : <SubtitleCard>R$ { ticketSelected.price + hotelOrNot.price }</SubtitleCard>}
      </Card>
    </>            
  );
}
