import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function useAsync(handler, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const act = async(...args) => {
    setLoading(true);
    setError(null);

    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.response.data.message);
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    if (immediate) {
      act().catch((error) => toast(error.response.data.message)); 
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
    act
  };
}
