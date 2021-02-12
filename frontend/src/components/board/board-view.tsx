import styles from './board.module.css';
import CardList from 'components/card-list/card-list-controller';
import { BoardProps } from './board-types';

const BoardView: React.FC<BoardProps> = ({ todos, dones }) => {
  return (
    <div className={styles.board}>
      <CardList
        title="ToDo Tasks"
        items={todos}
      />
      <CardList
        title="Done Tasks"
        items={dones}
        isDone={true}
      />
    </div>
  );
};

export default BoardView;
