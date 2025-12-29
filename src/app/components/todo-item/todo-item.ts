import { Component, inject, input } from '@angular/core';
import { Todo } from '../../model/todo.interface';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  todo = input<Todo>();
}
