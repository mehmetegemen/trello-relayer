import { RootState } from 'reducers';
import { request } from 'lib/request';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useRequest = (path: string, options?: RequestInit) => {
  const token = useSelector((state: RootState) => state.user.token);
  const [ data, setData ] = useState({ state: 'idle', data: null });

  useEffect(() => {
    const makeRequest = async () => {
      setData({ state: 'pending', data: null });

      let response;
      try {
        response = await request(token)(path, options);
      } catch (err) {
        setData({ state: 'error', data: null });
      }
      
      setData({ state: 'fulfilled', data: response });
    };

    makeRequest();
  }, [token, path, options]);

  return data as {
    state: 'fulfilled' | 'idle' | 'pending' | 'error';
    data: any;
  };
};

export default useRequest;
