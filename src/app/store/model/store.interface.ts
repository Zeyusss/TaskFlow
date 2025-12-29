import { Todo } from '../../model/todo.interface';

export type TodosFilter = 'all' | 'active' | 'completed';
export interface TodoStore {
  todos: Todo[];
  loading: boolean;
  filter: TodosFilter;
}
