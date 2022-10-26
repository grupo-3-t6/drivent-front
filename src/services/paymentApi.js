import api from './api';
import useTicketBody from '../hooks/useTicketBody';

export async function getPayment(token) {
  const response = await api.get('/payment', { 
    headers: {
      Authorization: `Bearer ${token}`,
    } 
  });
    
  return response.data;
}

export async function pay(token) {
  const body = useTicketBody();   

  const response = await api.post('/payment', body, { 
    headers: {
      Authorization: `Bearer ${token}`,
    } 
  });

  // eslint-disable-next-line no-console
  console.log(response.data);

  return response.data;
}