import { useTicketContext } from '../contexts/TicketContext';

export default function useTicketBody() {
  const { ticketSelected, hotelOrNot } = useTicketContext();
  const stayId = ticketSelected.name === 'Online' ? null : hotelOrNot.id;
  const finalPrice = ticketSelected.name === 'Online' ? ticketSelected.price : (ticketSelected.price + hotelOrNot.price);

  return { ticketId: ticketSelected.id, stayId, finalPrice };
}
