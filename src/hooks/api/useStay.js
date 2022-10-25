import useAsync from '../useAsync';
import useToken from '../useToken';

import * as stayApi from '../../services/stayApi';

export default function useStay() {
  const token = useToken();
  
  const {
    data: stays,
    loading: staysLoading,
    error: staysError,
    act: getStays
  } = useAsync(() => stayApi.getAllStays(token));

  return {
    stays,
    staysLoading,
    staysError,
    getStays
  };
}
