import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import Ticket from './Ticket'; 
import useTicket from '../../hooks/api/useTicket';

export default function ChoiceOfTicket() {
  const [ticketsData, setTicketsData] = useState([]);  
  const { tickets } = useTicket();
  
  useEffect(() => {
    if(tickets) {
      setTicketsData(tickets);
    }
  }, [tickets]);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Description>Primeiro, escolha sua modalidade de ingresso</Description>
      <TicketsBox>
        { ticketsData.length ? ticketsData.map(ticket => <Ticket key={ticket.id} name={ticket.name} price={ticket.price} /> ) : '' }
      </TicketsBox>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px!important;
`;

const Description = styled.p`
    font: 400 20px/23px 'Roboto', sans-serif;
    text-align: left;
    color: #8E8E8E;
    margin-bottom: 17px;
`;

const TicketsBox = styled.div`
    height: 145px;
    display: flex;
    column-gap: 24px;
`;
