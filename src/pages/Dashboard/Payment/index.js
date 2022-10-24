import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import ChoiceOfTicket from '../../../components/ChoiceOfTicket';
import { useEnrollContext } from '../../../contexts/EnrollContext';
import Warning from '../../../layouts/Warning';
import ConfirmPayment from '../../../components/Payment/ConfirmPayment';

export default function Payment() {
  const { enrolled } = useEnrollContext();

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
      {/* <ChoiceOfTicket /> */}
      <ConfirmPayment />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;
