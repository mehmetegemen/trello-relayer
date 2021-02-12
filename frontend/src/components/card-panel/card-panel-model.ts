import { actions } from 'actions';
import { RootState } from 'reducers';
import { request } from 'lib/request';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoTask } from 'types';

const { REACT_APP_API_URL: API_URL } = process.env;

const useCardPanelHooks = (card: TodoTask) => {
  const [isLoading, setLoading] = useState(false);
  const { doneListId, token } = useSelector((state: RootState) => ({
    doneListId: state.user.doneListId,
    token: state.user.token,
  }));

  const dispatch = useDispatch();

  const onDone = useCallback(async () => {
    setLoading(true);
    
    try {
      await request(token)(`${API_URL as string}/cards/${card.id}`, {
          method: 'PATCH',
          body: new URLSearchParams({
            idList: doneListId,
          })
        });

      dispatch({ type: actions.REMOVE_TODO, payload: card.id });
      dispatch({ type: actions.ADD_DONE, payload: card });

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [card]);
  
  return {
    isLoading,
    onDone,
  };
};

export default useCardPanelHooks;
