import styled from 'styled-components';

export default function Card({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 290px;
  height: 108px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  background: #FFEED2;
  margin-bottom: 30px;
`;
