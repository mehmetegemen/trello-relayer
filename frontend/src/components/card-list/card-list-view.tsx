import Button from 'components/button/button';
import Card from 'components/card/card-view';
import Input from 'components/input/input-controller';
import { noop } from 'lodash';
import { CardListViewProps } from './card-list-types';
import styles from './card-list.module.css';

const CardListView: React.FC<CardListViewProps> = ({
  title,
  items,
  isDone,
  onNewTaskNameChange = noop,
  onTaskSave = noop,
  connectedValue,
}) => (
  <div className={styles['card-list']}>
    {!isDone && (
      <>
        <Input onChange={onNewTaskNameChange} connectedValue={connectedValue} />
        <Button
          label="Save"
          onClick={onTaskSave}
        />
      </>
    )}
    <h1>{title}</h1>
    {items.map((item) => <Card key={item.id} item={item} isDone={isDone} />)}
  </div>
);

export default CardListView;
