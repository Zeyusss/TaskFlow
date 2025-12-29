import { Component, inject, input } from '@angular/core';
import { Todo } from '../../model/todo.interface';
import { TodoStore } from '../../store/todos.store';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  readonly store = inject(TodoStore);
  todo = input<Todo>();

  async onDeleteTodo(id: string | undefined) {
    await this.store.deleteTodo(id);
  }
  async onTodoToggled(id: string | undefined, completed: boolean) {
    if (!id) return;
    await this.store.updateTodo(id, completed);
  }
}
