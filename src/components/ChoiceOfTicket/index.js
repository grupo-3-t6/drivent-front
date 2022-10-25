import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CardsBox from '../../layouts/CardsBox';
import HotelOrNot from './HotelOrNot';
import Subtitle from '../../layouts/Subtitle';
import Ticket from './Ticket'; 
import useTicket from '../../hooks/api/useTicket';
import ConfirmButton from '../../layouts/ConfirmButton';
import OnlineOrderSummary from './OnlineOrderSummary';
import { useTicketContext } from '../../contexts';

export default function ChoiceOfTicket() {
  const [ticketsData, setTicketsData] = useState([]);
  const { ticketSelected, setTicketSelected, hotelOrNot } = useTicketContext();

  const { tickets } = useTicket();

  useEffect(() => {
    if(tickets) {
      setTicketsData(tickets);
    }
  }, [tickets]);

  return (
    <Container>
      <Subtitle>Primeiro, escolha sua modalidade de ingresso</Subtitle>
      <CardsBox>
        { ticketsData.length ? ticketsData.map(ticket => <Ticket key={ticket.id} name={ticket.name} price={ticket.price} isSelected={ticketSelected.name === ticket.name} setTicketSelected={setTicketSelected}/> ) : '' }
      </CardsBox>
      { ticketSelected.name === 'Online' ? <OnlineOrderSummary finalPrice={ticketSelected.price} />
        : ticketSelected.name === 'Presencial' ? <HotelOrNot /> : ''}
      { hotelOrNot.name && ticketSelected.name === 'Presencial' ? 
        <Subtitle>Fechado! O total ficou em <strong>R$ {ticketSelected.price + hotelOrNot.price}</strong>. Agora é só confirmar:</Subtitle> : ''}
      {hotelOrNot.name && ticketSelected.name === 'Presencial' ? <ConfirmButton text = 'RESERVAR INGRESSO' /> : '' }
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
