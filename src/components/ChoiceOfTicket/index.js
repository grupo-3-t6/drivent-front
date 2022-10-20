import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CardsBox from '../../layouts/CardsBox';
import Subtitle from '../../layouts/Subtitle';
import Ticket from './Ticket'; 
import useTicket from '../../hooks/api/useTicket';

export default function ChoiceOfTicket() {
  const [ticketsData, setTicketsData] = useState([]);
  const [ticketSelected, setTicketSelected] = useState(''); 
  const { tickets } = useTicket();
  
  useEffect(() => {
    if(tickets) {
      setTicketsData(tickets);
    }
  }, [tickets]);

  return (
    <Container>
      <Subtitle text='Primeiro, escolha sua modalidade de ingresso' />
      <CardsBox>
        { ticketsData.length ? ticketsData.map(ticket => <Ticket key={ticket.id} name={ticket.name} price={ticket.price} isSelected={ticketSelected === ticket.name} setTicketSelected={setTicketSelected}/> ) : '' }
      </CardsBox>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 44px;
`;
