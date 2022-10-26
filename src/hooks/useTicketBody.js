import { useTicketContext } from '../contexts/TicketContext';

export default function useTicketBody() {
  const { ticketSelected, hotelOrNot } = useTicketContext();

  return { ticketId: ticketSelected.id, stayId: hotelOrNot.id, finalPrice: ticketSelected.price + hotelOrNot.price };
}
