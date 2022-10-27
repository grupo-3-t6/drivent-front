import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CardsBox from '../../layouts/CardsBox';
import HotelOrNot from './HotelOrNot';
import Subtitle from '../../layouts/Subtitle';
import Ticket from './Ticket'; 
import useTicket from '../../hooks/api/useTicket';
import OnlineOrderSummary from './OnlineOrderSummary';
import { useTicketContext } from '../../contexts/TicketContext';

export default function ChoiceOfTicket() {
  const [ticketsData, setTicketsData] = useState([]);
  const [ticketSelected, setTicketSelected] = useState({});
  const [hotelOrNot, setHotelOrNot] = useState({});
  const { tickets } = useTicket();
  const { setTicketInfo } = useTicketContext();
  
  useEffect(() => {
    if(tickets) {
      setTicketsData(tickets);
    }
  }, [tickets]);

  function recieveObject(ticket) {
    let finalTicket = {};
    if(ticketSelected.name === 'Presencial') {
      finalTicket = {
        name: ticketSelected.name + ' ' + hotelOrNot.name,
        price: ticketSelected.price + hotelOrNot.price
      };
    }else {
      finalTicket = ticketSelected;
    }
    console.log(finalTicket);
    setTicketInfo(finalTicket);
  }

  return (
    <Container>
      <Subtitle>Primeiro, escolha sua modalidade de ingresso</Subtitle>
      <CardsBox>
        { ticketsData.length ? ticketsData.map(ticket => <Ticket key={ticket.id} name={ticket.name} price={ticket.price} isSelected={ticketSelected.name === ticket.name} setTicketSelected={setTicketSelected}/> ) : '' }
      </CardsBox>
      { ticketSelected.name === 'Online' ? <OnlineOrderSummary recieve = {recieveObject} finalPrice={ticketSelected.price} />
        : ticketSelected.name === 'Presencial' ? <HotelOrNot hotelOrNot={hotelOrNot} setHotelOrNot={setHotelOrNot} /> : ''}
      { hotelOrNot.name && ticketSelected.name === 'Presencial' ? 
        <OnlineOrderSummary recieve = {recieveObject} finalPrice={ticketSelected.price + hotelOrNot.price} /> : ''}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
