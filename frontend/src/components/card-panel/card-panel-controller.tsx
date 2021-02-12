import useCardPanelHooks from './card-panel-model';
import { CardPanelBaseProps } from './card-panel-types';
import CardPanelView from './card-panel-view';

const CardPanel: React.FC<CardPanelBaseProps> = ({ item, isDone }) => {
  const { isLoading, onDone } = useCardPanelHooks(item);

  return (
    <CardPanelView
      item={item}
      isDone={isDone}
      isLoading={isLoading}
      onDone={onDone}
    />
  );
};

export default CardPanel;
