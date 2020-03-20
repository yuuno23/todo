import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../../models/todo.model';

// 優先順表示(リスト用)
export interface PriorityData {
  id: number;
  text: string;
  color: string;
}
// カテゴリ(優先/時間帯)
export interface TodoCategoryData {
  id: number;
  priority: string;
  timezone: string;
  color: string;
}

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent implements OnInit {
  @Input() loading: boolean;
  @Input() todo: Todo;
  @Input() priorityCategory: number;
  @Output() update = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<number>();

  form: FormGroup;

  // 定義(どこでまとめるのか良いか）
  todoCategory:TodoCategoryData[] =[
    {
      id: 1,
      priority: '高',
      timezone: '朝',
      color: 'accent',
    },
    {
      id: 2,
      priority: '中',
      timezone: '昼',
      color: 'warn',
    },
    {
      id: 3,
      priority: '低',
      timezone: '夜',
      color: 'primary',
    }
  ];
  priorityData: PriorityData[] = [
    {
      id: 1,
      text: '優先度：高',
      color: '#ffe5c5',
    },
    {
      id: 2,
      text: '優先度：中',
      color: '#c5edff',
    },
    {
      id: 3,
      text: '優先度：低',
      color: '#d3c5ff',
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      text: [this.todo.text, Validators.required],
    });
  }

  onSubmit() {
    const text: string = this.form.get('text').value;
    const todo = { ...this.todo, text };
    this.update.emit(todo);
  }


}
