import { Injectable } from '@angular/core';
import { MOCK_TODOS } from '../model/todo.mock';
import { Todo } from '../model/todo.interface';
import { patchState } from '@ngrx/signals';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  async getTodos() {
    await sleep(1000);
    return MOCK_TODOS;
  }
  async addTodos(todo: Partial<Todo>) {
    await sleep(1000);
    return {
      id: Math.random().toString(36).substring(2, 9),
      ...todo,
    } as Todo;
  }
  async deleteTodo(id: string | undefined) {
    await sleep(500);
  }
  async updateTodo(id: string | undefined, completed: boolean) {
    await sleep(500);
  }
}

async function sleep(ms: number) {
  return new Promise((reslove) => setTimeout(reslove, ms));
}
