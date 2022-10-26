import Subtitle from '../../layouts/Subtitle';
import Ticket from './Ticket';
import CardsBox from '../../layouts/CardsBox';
import useStay from '../../hooks/api/useStay';
import { useTicketContext } from '../../contexts';

export default function HotelOrNot() {
  const { stays } = useStay();
  const { hotelOrNot, setHotelOrNot } = useTicketContext();

  return (
    <>
      <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle> 
      <CardsBox>
        {stays && stays.map(stay => <Ticket key={stay.id} id={stay.id} name={stay.name} price={stay.price} isSelected={hotelOrNot.name === stay.name} setTicketSelected={setHotelOrNot} />)}
      </CardsBox>
    </>
  );
}
