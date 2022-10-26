import styled from 'styled-components';

import TextCard from '../../layouts/TextCard';
import SubtitleCard from '../../layouts/SubtitleCard';

export default function Ticket({ id, name, price, isSelected, setTicketSelected }) {
  return (
    <TicketContainer onClick={() => setTicketSelected( { id, name, price } )} isSelected={isSelected}>
      <TextCard>{name}</TextCard>
      <SubtitleCard>{name.includes('Hotel') ? `+ R$ ${price}` : `R$ ${price}`}</SubtitleCard>   
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
  border: ${props => props.isSelected ? 'none' : '1px solid #CECECE'};
  border-radius: 20px;
  cursor: pointer;
  ${props => props.isSelected ? 'background: #FFEED2;' : '' };
`;
