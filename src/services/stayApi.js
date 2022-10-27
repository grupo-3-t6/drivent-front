import api from './api';

export async function getAllStays(token) {
  const response = await api.get('/stays', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
