import Card from './Card';
import Subtitle from '../../layouts/Subtitle';
import SubtitleCard from '../../layouts/SubtitleCard';
import TextCard from '../../layouts/TextCard';

export default function TicketSummary() {
  return (
    <>
      <Subtitle text='Ingresso escolhido' />
      <Card>
        <TextCard>Presencial + Com Hotel</TextCard>
        <SubtitleCard>R$ 600</SubtitleCard>
      </Card>
    </>            
  );
}
