import styled from 'styled-components';

export default function Ticket({ name, price }) {
  return (
    <TicketContainer>
      <TicketName>{name}</TicketName>
      <TicketPrice>R$ {price}</TicketPrice>   
    </TicketContainer>
  );
}

const TicketContainer = styled.div`
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
