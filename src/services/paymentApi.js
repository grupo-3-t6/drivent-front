import api from './api';

export async function getPayment(token) {
  const response = await api.get('/payment', { 
    headers: {
      Authorization: `Bearer ${token}`,
    } 
  });
    
  return response.data;
}

export async function pay(body, token) {
  const response = await api.post('/payment', body, { 
    headers: {
      Authorization: `Bearer ${token}`,
    } 
  });

  return response.data;
}
