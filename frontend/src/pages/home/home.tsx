import { actions } from 'actions';
import { RootState } from 'reducers';
import Board from 'components/board/board-controller';
import useRequest from 'hooks/useRequest';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const { REACT_APP_API_URL: API_URL } = process.env;

const Home = () => {
  const { doneListId, toDoListId } = useSelector((state: RootState) => ({
    toDoListId: state.user.toDoListId,
    doneListId: state.user.doneListId,
  }));
  
  const { data: toDosData } = useRequest(`${API_URL as string}/lists/${toDoListId}/cards`);
  const { data: donesData } = useRequest(`${API_URL as string}/lists/${doneListId}/cards`);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (toDosData)
      dispatch({ type: actions.SET_TODOS, payload: toDosData });
  }, [toDosData]);

  useEffect(() => {
    if (donesData)
      dispatch({ type: actions.SET_DONES, payload: donesData });
  }, [donesData]);

  return (
    <div>
      <Board />
    </div>
  );
};

export default Home;
