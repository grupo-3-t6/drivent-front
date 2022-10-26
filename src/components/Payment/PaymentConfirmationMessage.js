import styled from 'styled-components';
import { IoCheckmarkCircle } from 'react-icons/io5';

export default function PaymentConfirmationMessage() {
  return (
    <Container>
      <CheckIcon />
      <div>
        <Title>Pagamento confirmado!</Title>
        <Message>Prossiga para escolha de hospedagem e atividades</Message>
      </div>
    </Container>
  );
}

const Container = styled.div`
 display: flex;
 align-items: center;
 column-gap: 13.83px;
`;

const CheckIcon = styled(IoCheckmarkCircle)`
 font-size: 48px;
 color: #36B853;
`;

const Title = styled.h6`
 font: 700 16px/19px 'Roboto', sans-serif;
 text-align: left;
 color: #454545;    
`;

const Message = styled(Title)`
 font-weight: 400;    
`;
