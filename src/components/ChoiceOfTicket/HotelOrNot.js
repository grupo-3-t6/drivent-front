import Subtitle from '../../layouts/Subtitle';
import Ticket from './Ticket';
import CardsBox from '../../layouts/CardsBox';

export default function HotelOrNot({ hotelOrNot, setHotelOrNot }) {
  return (
    <>
      <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle> 
      <CardsBox>
        <Ticket name='Sem Hotel' price={0} isSelected={hotelOrNot.name === 'Sem Hotel'} setTicketSelected={setHotelOrNot}/>
        <Ticket name='Com Hotel' price={350} isSelected={hotelOrNot.name === 'Com Hotel'} setTicketSelected={setHotelOrNot}/> 
      </CardsBox>
    </>
  );
}
