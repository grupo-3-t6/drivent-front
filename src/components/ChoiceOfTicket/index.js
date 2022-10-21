import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CardsBox from '../../layouts/CardsBox';
import Subtitle from '../../layouts/Subtitle';
import Ticket from './Ticket'; 
import useTicket from '../../hooks/api/useTicket';
import ConfirmButton from '../../layouts/ConfirmButton';

export default function ChoiceOfTicket() {
  const [ticketsData, setTicketsData] = useState([]);
  const [ticketSelected, setTicketSelected] = useState({});
  const [hotelOrNot, setHotelOrNot] = useState({});
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
        { ticketsData.length ? ticketsData.map(ticket => <Ticket key={ticket.id} name={ticket.name} price={ticket.price} isSelected={ticketSelected.name === ticket.name} setTicketSelected={setTicketSelected}/> ) : '' }
      </CardsBox>
      <ConfirmBox>
        { ticketSelected.name === 'Online' ? <>
          <Subtitle text ='Fechado! O total ficou em '/>
          <span> R${ticketSelected.price}</span>
          <Subtitle text = '. Agora é só confirmar'/>
        </> : ticketSelected.name === 'Presencial' ? <Subtitle text ='Ótimo! Agora escolha sua modalidade de hospedagem '/> : ''}
      </ConfirmBox>
      <CardsBox>
        { ticketSelected.name === 'Presencial' ?
          <> 
            <Ticket name='Sem Hotel' price={0} isSelected={hotelOrNot.name === 'Sem Hotel'} setTicketSelected={setHotelOrNot}/>
            <Ticket name='Com Hotel' price={350} isSelected={hotelOrNot.name === 'Com Hotel'} setTicketSelected={setHotelOrNot}/> 
          </>  : ''}
      </CardsBox>
      <ConfirmBox>
        { hotelOrNot.name !== undefined && ticketSelected.name === 'Presencial'? <>
          <Subtitle text ='Fechado! O total ficou em '/>
          <span> R${ticketSelected.price + hotelOrNot.price}</span>
          <Subtitle text = '. Agora é só confirmar'/>
        </> : ''}
      </ConfirmBox>
      {( hotelOrNot.name !== undefined && ticketSelected.name === 'Presencial') || ticketSelected.name === 'Online' ? 
        <ConfirmButton text = 'RESERVAR INGRESSO'/> : ''}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 44px;
`;

const ConfirmBox = styled.div`
  display: flex;
  margin-top: 44px;
  
  span {
    margin-left: 4px;
    font: 700 20px/23px 'Roboto', sans-serif;
    color: #8E8E8E;
  }
`;
