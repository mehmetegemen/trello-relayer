import useCardListHooks from './card-list-model';
import { CardListControllerProps } from './card-list-types';
import CardListView from './card-list-view';

const CardList: React.FC<CardListControllerProps> = ({ items, isDone, title }) => {
  const { onNewTaskNameChange, onTaskSave, newTodoInputValue } = useCardListHooks();
  
  return (
    <CardListView
      items={items}
      isDone={isDone}
      title={title}
      onNewTaskNameChange={onNewTaskNameChange}
      onTaskSave={onTaskSave}
      connectedValue={newTodoInputValue}
    />
  );
};

export default CardList;
