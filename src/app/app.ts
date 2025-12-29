import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { TodoItem } from './components/todo-item/todo-item';
import { TodosSkeleton } from './components/todos-skeleton/todos-skeleton';

@Component({
  selector: 'app-root',
  imports: [DatePipe, TodoItem, TodosSkeleton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
  todayDate = signal(new Date());
}
