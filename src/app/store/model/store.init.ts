import { MOCK_TODOS } from '../../model/todo.mock';
import { TodoStore } from './store.interface';

export const initTodoStore: TodoStore = {
  todos: [],
  loading: false,
  filter: 'all',
};
