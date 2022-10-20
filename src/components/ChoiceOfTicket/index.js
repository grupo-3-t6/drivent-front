import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
      <TicketsBox>
        { ticketsData.length ? ticketsData.map(ticket => <Ticket key={ticket.id} name={ticket.name} price={ticket.price} isSelected={ticketSelected === ticket.name} setTicketSelected={setTicketSelected}/> ) : '' }
      </TicketsBox>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 44px;
`;

const TicketsBox = styled.div`
    height: 145px;
    display: flex;
    column-gap: 24px;
`;
