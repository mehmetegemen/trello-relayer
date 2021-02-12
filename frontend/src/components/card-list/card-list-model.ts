import { actions } from 'actions';
import { RootState } from 'reducers';
import { request } from 'lib/request';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const { REACT_APP_API_URL: API_URL } = process.env;

const useCardListHooks = () => {
  const [isLoading, setLoading] = useState(false);
  const { toDoListId, token, newTodoInputValue } = useSelector((state: RootState) => ({
    toDoListId: state.user.toDoListId,
    token: state.user.token,
    newTodoInputValue: state.values.newTodoValue,
  }));
  const dispatch = useDispatch();

  const onNewTaskNameChange = useCallback((value) => {
    dispatch({ type: actions.SET_NEW_ADD_TODO_VALUE, payload: value });
  }, [dispatch]);
  
  const onTaskSave = useCallback(async () => {
    setLoading(true);
    
    let response;
    try {
      response = await request(token)(`${API_URL as string}/lists/${toDoListId}/cards`, {
          method: 'POST',
          body: new URLSearchParams({
            name: newTodoInputValue,
          })
        });
      dispatch({ type: actions.ADD_TODO, payload: response });
      dispatch({ type: actions.SET_NEW_ADD_TODO_VALUE, payload: '' });

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [newTodoInputValue]);
  
  return {
    onNewTaskNameChange,
    onTaskSave,
    isLoading,
    newTodoInputValue,
  };
};

export default useCardListHooks;
