import { createContext, useContext, useState } from 'react';

const TicketContext = createContext();

export default TicketContext;

export function useTicketContext() {
  return useContext(TicketContext);
}

export function TicketProvider({ children }) {
  const [ticketInfo, setTicketInfo] = useState({});

  return <TicketContext.Provider value={{ ticketInfo, setTicketInfo }}>{children}</TicketContext.Provider>;
}
