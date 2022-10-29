import { useEffect } from 'react';
import Warning from '../../../layouts/Warning';
import { usePaymentContext } from '../../../contexts';
import usePayment from '../../../hooks/api/usePayment';

export default function WarningNoHotel() {
  const { paymentData, setPaymentData } = usePaymentContext();
  const { getPayment } = usePayment();

  useEffect(async() => {
    const data = await getPayment();

    setPaymentData(data);
  }, []);

  return (
    <>
      { !paymentData ?  <Warning> 
        <p> 
          Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem
        </p> 
      </Warning> : paymentData.ticket.name === 'Online' || paymentData.stay.name === 'Sem Hotel' ?  
      
        <Warning> 
          <p> 
            Sua modalidade de ingresso não inclui hospedagem Prossiga para escolha de atividades
          </p> 
        </Warning> : 'Coloque as opções de hotéis aqui!' 

      }  
    </>
  );
}
