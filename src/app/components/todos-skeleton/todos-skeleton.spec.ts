import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosSkeleton } from './todos-skeleton';

describe('TodosSkeleton', () => {
  let component: TodosSkeleton;
  let fixture: ComponentFixture<TodosSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
