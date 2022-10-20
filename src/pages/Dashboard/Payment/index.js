import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import ChoiceOfTicket from '../../../components/ChoiceOfTicket';

export default function Payment() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <ChoiceOfTicket />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px!important;
`;
