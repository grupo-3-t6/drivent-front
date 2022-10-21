import styled from 'styled-components';
import TextButton from './TextButton';

export default function ConfirmButton({ text }) {
  return (
    <Container>
      <TextButton>
        {text}
      </TextButton>
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

`;
