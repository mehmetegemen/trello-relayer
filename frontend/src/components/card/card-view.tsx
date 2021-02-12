import CardPanel from 'components/card-panel/card-panel-controller';
import { CardProps } from './card-types';
import styles from './card.module.css';

const Card: React.FC<CardProps> = ({ item, isDone }) => (
  <div className={styles.card}>
    <CardPanel item={item} isDone={isDone} />
  </div>
);

export default Card;