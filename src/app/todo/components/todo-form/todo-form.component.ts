import { Component, Output, ChangeDetectionStrategy, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../../models/todo.model';

// category interface
export interface TodoCategoryData {
  id: number;
  priority: string;
  timezone: string;
}
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TodoFormComponent {

  // category (定義)
  todoCategory:TodoCategoryData[] =[
    {
      id: 1,
      priority: '高',
      timezone: '朝',
    },
    {
      id: 2,
      priority: '中',
      timezone: '昼',
    },
    {
      id: 3,
      priority: '低',
      timezone: '夜',
    }
  ];
  @Input() loading: boolean;
  @Output() create = new EventEmitter<Partial<Todo>>();

  form = this.fb.group({
    text: ['', Validators.required],
    priority: ['', Validators.required],
    timezone: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    const priority: number = this.form.get('priority').value;
    const text: string = this.form.get('text').value;
    const timezone: number = this.form.get('timezone').value;
    const todo: Partial<Todo> = {
      text, priority, timezone
    };
    this.create.emit(todo);
    this.form.reset();
  }
}
