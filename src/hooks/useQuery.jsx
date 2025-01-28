import { useState, useEffect } from 'react';

export const useQuery = ({ fetchFn, args = [], dependencies = [] }) => {
  const [fetchStatus, setFetchStatus] = useState('PENDING');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setFetchStatus('LOADING');
    fetchFn(...args)
      .then((result) => {
        setData(result);
        setFetchStatus('SUCCESS');
      })
      .catch((e) => {
        setError(e);
        setFetchStatus('FAILURE');
      });
  }, dependencies);

  return { 
    data, 
    error,
    isSuccess: fetchStatus === 'SUCCESS',
    isLoading: fetchStatus === 'LOADING',
    isFail: fetchStatus === 'FAILURE',
 };
};