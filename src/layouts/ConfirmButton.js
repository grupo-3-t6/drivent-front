import styled from 'styled-components';

import { useTicketContext } from '../contexts/TicketContext';

export default function ConfirmButton({ text }) {
  const { setRedirectToConfirmPayment } = useTicketContext();

  return (
    <Container onClick={() => setRedirectToConfirmPayment(true)}>
      {text}
    </Container>
  );
}

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 162px;
    height: 37px;
    background: #E0E0E0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    font: 400 13px/16px 'Roboto', sans-serif;
    text-align: center;
    color: #000000;
    cursor: pointer;

    &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    background-color: #d5d5d5;
    }
`;
