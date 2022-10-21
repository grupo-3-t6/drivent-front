import styled from 'styled-components';

export default function TextCard({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.h5`
  font: 400 16px/19px 'Roboto', sans-serif;
  text-align: center;
  color: #454545;
`;
