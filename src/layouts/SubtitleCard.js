import styled from 'styled-components';

export default function SubtitleCard({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.h6`
  font: 400 14px/16px 'Roboto', sans-serif;
  text-align: center;
  color: #898989;
`;  
