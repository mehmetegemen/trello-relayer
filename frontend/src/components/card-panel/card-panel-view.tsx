import Button from 'components/button/button';
import { CardPanelViewBaseProps } from './card-panel-types';
import styles from './card-panel.module.css';

const CardPanelView: React.FC<CardPanelViewBaseProps> = ({ item, isDone, onDone, isLoading }) => {
  return (
    <div className={styles['card-panel']}>
      {
        !isDone && !isLoading &&
        <Button
          icon="✔️"
          description="Mark task as done"
          onClick={onDone}  
        />
      }
      {
        isLoading && '⌛'
      }
      <h2>{item.name}</h2>
    </div>
  );
};

export default CardPanelView;
