import { TodoTask } from 'types';

export interface CardPanelViewBaseProps {
  item: TodoTask;
  isLoading: boolean;
  onDone?: (...args: any) => any;
  isDone?: boolean;
}

export interface CardPanelBaseProps {
  item: TodoTask;
  isDone?: boolean;
}
