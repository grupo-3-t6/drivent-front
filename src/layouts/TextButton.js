import styled from 'styled-components';

export default function TextButton({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.h6`
  font: 400 13px/16px 'Roboto', sans-serif;
  text-align: center;
  color: #000000;
`;
