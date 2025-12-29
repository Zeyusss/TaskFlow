import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { initTodoStore } from './model/store.init';
import { computed, inject } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodosFilter } from './model/store.interface';

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initTodoStore),
  withComputed((store) => ({
    filteredTodos: () => {
      const todos = store.todos();
      const filter = store.filter();

      switch (filter) {
        case 'active':
          return todos.filter((t) => !t.completed);
        case 'completed':
          return todos.filter((t) => t.completed);
        default:
          return todos;
      }
    },
    allCount: computed(() => store.todos().length),
    activeCount: computed(() => store.todos().filter((t) => !t.completed).length),
    completedCount: computed(() => store.todos().filter((t) => t.completed).length),
  })),
  withMethods((store, todosService = inject(TodosService)) => ({
    async loadAll() {
      patchState(store, { loading: true });
      const todos = await todosService.getTodos();
      patchState(store, { todos, loading: false });
    },
    async addTodo(title: string) {
      const todo = await todosService.addTodos({ title, completed: false });
      patchState(store, (state) => ({
        todos: [...state.todos, todo],
      }));
    },
    async deleteTodo(id: string | undefined) {
      await todosService.deleteTodo(id);

      patchState(store, (state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    },
    async updateTodo(id: string, completed: boolean) {
      await todosService.updateTodo(id, completed);
      patchState(store, (state) => ({
        todos: state.todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
      }));
    },
    updateFilter(filter: TodosFilter) {
      patchState(store, { filter });
    },
  }))
);
