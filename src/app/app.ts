import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { TodoItem } from './components/todo-item/todo-item';
import { TodosSkeleton } from './components/todos-skeleton/todos-skeleton';
import { TodoStore } from './store/todos.store';

@Component({
  selector: 'app-root',
  imports: [DatePipe, TodoItem, TodosSkeleton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  readonly store = inject(TodoStore);
  ngOnInit(): void {
    initFlowbite();
    this.loadTodos().then(() => console.log('Todos Loaded!'));
  }
  todayDate = signal(new Date());

  async loadTodos() {
    await this.store.loadAll();
  }
  async onAddTodo(title: string) {
    await this.store.addTodo(title);
  }
}
