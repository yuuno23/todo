import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Todo } from '../../models/todo.model';
import { TodoFacade } from '../../store/todo.facade';
// リスト用優先順表示
export interface PriorityData {
  id: number;
  text: string;
  color: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  loading$ = this.todoService.loading$;
  todos$ = this.todoService.todos$;

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

  constructor(private todoService: TodoFacade) {}
  ngOnInit() {
    // 初回データをローディング
    this.todoService.loadAll();
  }
  create(todo: Partial<Todo>) {
    const date = new Date();
    todo.checked = false; // チェック用
    todo.createdAt = Math.floor(date.getTime() / 1000); // 作成時間
    todo.updatedAt = Math.floor(date.getTime() / 1000); // 更新時間
    this.todoService.create(todo); // todoService
  }
  update(todo: Todo) {
    this.todoService.update(todo);
  }
  remove(id: number) {
    this.todoService.remove(id);
  }
}
