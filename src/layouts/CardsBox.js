import styled from 'styled-components';

export default function CardsBox({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.div`
    height: 145px;
    display: flex;
    column-gap: 24px;
`;
