import useBoardHooks from './board-model';
import BoardView from './board-view';

const Board = () => {
  const { todos, dones } = useBoardHooks();
  
  return (
    <BoardView
      todos={todos}
      dones={dones}
    />
  );
};

export default Board;
