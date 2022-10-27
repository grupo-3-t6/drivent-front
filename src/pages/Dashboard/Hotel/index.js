import React from 'react';
import Warning from '../../../layouts/Warning';
import { useTicketContext } from '../../../contexts/TicketContext';

export default function Hotel() {
  const { ticketInfo } = useTicketContext();

  return (
    <>
      { ticketInfo.ticketSelected.name === 'Online' || ticketInfo.hotelOrNot.name === 'Sem Hotel' ?  <Warning> 
        <p> 
          Sua modalidade de ingresso não inclui hospedagem
        </p> 
        <p>
          Prossiga para a escolha de atividades
        </p>
      </Warning> : ''} 
    </>
  );
}
