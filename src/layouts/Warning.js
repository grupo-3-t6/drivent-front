import styled from 'styled-components';

export default function Warning({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.h6`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    height: 46px;
    width: 465px;
    font: 400 20px 'Roboto', sans-serif;
    text-align: center;
    color: #8e8e8e;
  }
`;
