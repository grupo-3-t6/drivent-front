import React from 'react';
import Warning from '../../../layouts/Warning';
import { useTicketContext } from '../../../contexts';
import { usePaymentContext } from '../../../contexts';

export default function WarningNoHotel() {
  const { ticketSelected, hotelOrNot } = useTicketContext();
  const { paymentData } = usePaymentContext();

  return (
    <>
      { !paymentData ?  <Warning> 
        <p> 
          Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem
        </p> 
      </Warning> : ticketSelected.name === 'Online' || hotelOrNot.name === 'Sem Hotel' ?  
      
        <Warning> 
          <p> 
            Sua modalidade de ingresso não inclui hospedagem Prossiga para escolha de atividades
          </p> 
        </Warning> : '' 

      }  
    </>
  );
}
