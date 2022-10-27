import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';

import ChoiceOfTicket from '../../../components/ChoiceOfTicket';
import { useEnrollContext } from '../../../contexts/EnrollContext';
import Warning from '../../../layouts/Warning';
import ConfirmPayment from '../../../components/Payment/ConfirmPayment';
import { useTicketContext, usePaymentContext } from '../../../contexts';
import usePayment from '../../../hooks/api/usePayment';

export default function Payment() {
  const { enrolled } = useEnrollContext();
  const { redirectToConfirmPayment } = useTicketContext();
  const { paymentData, setPaymentData } = usePaymentContext();
  const { getPayment } = usePayment();

  useEffect(async() => {
    const data = await getPayment();

    setPaymentData(data);
  }, []);

  if (!enrolled) {
    return (
      <Warning>
        <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
      </Warning>
    );
  }

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      { redirectToConfirmPayment || paymentData ? <ConfirmPayment /> : <ChoiceOfTicket /> }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;
