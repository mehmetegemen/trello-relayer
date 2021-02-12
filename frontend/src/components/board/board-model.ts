import { RootState } from 'reducers';
import { useSelector } from 'react-redux';

const useBoardHooks = () => {
  const { todos, dones } = useSelector((state: RootState) => ({
    todos: state.todos,
    dones: state.dones,
  }));

  return {
    todos,
    dones,
  };
};

export default useBoardHooks;
