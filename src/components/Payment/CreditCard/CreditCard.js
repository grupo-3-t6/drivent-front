import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { toast } from 'react-toastify';
import MuiButton from '@material-ui/core/Button';

import { checkExpiryDate, checkCardData } from './CardUtils';
// import UserContext from '../../../contexts/UserContext';

export default function CreditCard() {
  const [cardData, setCardData] = useState({
    cvc: '',
    expiry: '',
    focused: '',
    name: '',
    number: '',
  });

  // const { user } = useContext(UserContext);

  function handleInputFocus(e) {
    setCardData({ ...cardData, focused: e.target.name });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    setCardData({ ...cardData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const config = { headers: { Authorization: `Bearer ${user.token}` } };
    const { cvc, expiry, name, number } = cardData;

    const expiryDate = expiry.split('/');

    if (!checkCardData(number, name, cvc, expiryDate)) {
      return;
    }

    if (!checkExpiryDate(String(expiryDate))) {
      toast('Data de validade inválida');
      return false;
    }
  };

  const { name, number, expiry, cvc, focused } = cardData;

  return (
    <Container className="Card">
      <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focused} />
      <form onSubmit={handleSubmit}>
        <InputsContainer>
          <StyledInput
            type="tel"
            name="number"
            placeholder="Card Number"
            pattern="[0-9]{16,22}"
            required
            maxLength="22"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <small>E.g.: 49..., 51..., 36..., 37...</small>
          <StyledInput
            type="text"
            name="name"
            placeholder="Name"
            pattern="[a-zA-Z ]{10,30}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <InputSubcontainer>
            <ExpiryInput
              type="text"
              name="expiry"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
              maxLength="5"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <CvcInput
              type="tel"
              name="cvc"
              placeholder="CVC"
              pattern="\d{3,4}"
              required
              maxLength="4"
              minLength="3"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </InputSubcontainer>
        </InputsContainer>
        <Button type="submit" variant='contained'>
          FINALIZAR PAGAMENTO
        </Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  max-width: 706px;
  height: 225px;
  display: flex;
  form {
    width: 100%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  height: 185px;
  input {
    height: 42px;
    border: 0.5px solid #e0e0e0;
    border-radius: 5px;
    padding-left: 5px;
    outline: none;
    &::placeholder {
      font: 400 18px 'Roboto', sans-serif;
      color: #8e8e8e;
    }
  }
  small {
    font: 400 15px 'Roboto', sans-serif;
    color: #8e8e8e;
    margin-top: 7px;
    margin-bottom: 15px;
  }
  @media (max-width: 700px) {
    margin-top: 20px;
  }
`;

const StyledInput = styled.input`
  width: 95%;
`;

const InputSubcontainer = styled.div`
  display: flex;
  gap: 5%;
  margin-top: 18px;
`;

const ExpiryInput = styled.input`
  width: 65%;
`;
const CvcInput = styled.input`
  width: 25%;
`;

const Button = styled(MuiButton)`
  margin: 57px 0 0 -285px !important;
`;
