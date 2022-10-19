import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function ChoiceOfTicket() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Description>Primeiro, escolha sua modalidade de ingresso</Description>
      <TicketsBox>
        <Ticket>
          <TicketName>Presencial</TicketName>
          <TicketPrice>R$ 250</TicketPrice> 
        </Ticket>
        <Ticket>
          <TicketName>Online</TicketName>
          <TicketPrice>R$ 100</TicketPrice> 
        </Ticket>
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

const Ticket = styled.div`
    width: 145px;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    justify-content: center;
    align-items: center;
    border: 1px solid #CECECE;
    border-radius: 20px;
    cursor: pointer;
`;

const TicketName = styled.h5`
    font: 400 16px/19px 'Roboto', sans-serif;
    text-align: center;
    color: #454545;
`;

const TicketPrice = styled.h6`
    font: 400 14px/16px 'Roboto', sans-serif;
    text-align: center;
    color: #898989;
`;
