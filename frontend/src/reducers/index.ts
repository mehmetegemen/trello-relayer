import { actions } from 'actions';
import { combineReducers } from 'redux';

const valuesState = {
  newTodoValue: '',
};

const ins = [
  {
    id: 1,
    name: '#####',
  }
];

const user = {
  token: process.env.REACT_APP_TOKEN as string,
  toDoListId: process.env.REACT_APP_TODO_LIST_ID as string,
  doneListId: process.env.REACT_APP_DONE_LIST_ID as string,
};

const todoReducer = (state = ins, action: any) => {
  switch (action.type) {
    case actions.SET_TODOS:
      return [
        ...action.payload.map((trelloCard: any) => ({
          id: trelloCard.id,
          name: trelloCard.name,
        }))
      ];
    case actions.ADD_TODO:
      return [
        ...state,
        {
          ...action.payload
        },
      ];
    case actions.REMOVE_TODO:
      return [
        ...state.filter(todo => todo.id !== action.payload)
      ];
    default:
      return state;
  }
};

const doneReducer = (state = ins, action: any) => {
  switch (action.type) {
    case actions.SET_DONES:
      return [
        ...action.payload.map((trelloCard: any) => ({
          id: trelloCard.id,
          name: trelloCard.name,
        }))
      ];
    case actions.ADD_DONE:
      return [
        ...state,
        {
          ...action.payload
        },
      ];
    default:
      return state;
  }
};

const userReducer = (state = user, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const valuesReducer = (state = valuesState, action: any) => {
  switch (action.type) {
    case actions.SET_NEW_ADD_TODO_VALUE:
      return {
        ...state,
        newTodoValue: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todoReducer,
  dones: doneReducer,
  user: userReducer,
  values: valuesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
