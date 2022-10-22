import styled from 'styled-components';

export default function Subtitle({ children }) {
  return (
    <Container>{children}</Container>
  );
}

const Container = styled.p`
    font: 400 20px/23px 'Roboto', sans-serif;
    text-align: left;
    color: #8E8E8E;
    margin-bottom: 17px;
`;
