import { createContext, useContext, useState } from 'react';

const TicketContext = createContext();

export default TicketContext;

export function useTicketContext() {
  return useContext(TicketContext);
}

export function TicketProvider({ children }) {
  const [ticketSelected, setTicketSelected] = useState({});
  const [hotelOrNot, setHotelOrNot] = useState({});
  const [redirectToConfirmPayment, setRedirectToConfirmPayment] = useState(false);

  return <TicketContext.Provider value={{ ticketSelected, setTicketSelected, hotelOrNot, setHotelOrNot, redirectToConfirmPayment, setRedirectToConfirmPayment }}>{children}</TicketContext.Provider>;
}
