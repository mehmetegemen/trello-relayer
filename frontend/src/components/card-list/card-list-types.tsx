import { TodoTask } from 'types';
import { Diff } from 'utility-types';

export interface CardListViewProps {
  title: string;
  items: TodoTask[];
  isDone?: boolean;
  onNewTaskNameChange?: (...args: any) => any;
  onTaskSave?: (...args: any) => any;
  connectedValue?: string;
}

export interface CardListControllerHookOutputs {
  onNewTaskNameChange: (...args: any) => any;
}

export type CardListControllerProps = Diff<CardListViewProps, CardListControllerHookOutputs>
