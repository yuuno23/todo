import { Component, OnInit } from '@angular/core';

export interface TodoList {
  name: string;
  timezone: number;
  updated: Date;
}
export interface TimeZoneData {
  id: number;
  text: string;
  color: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todolist: TodoList[] = [
    {
      name: '予定内容１',
      timezone: 1,
      updated: new Date('2020/03/18'),
    },
    {
      name: '予定内容2',
      timezone: 2,
      updated: new Date('2020/03/18'),
    },
    {
      name: '予定内容3',
      timezone: 3,
      updated: new Date('2020/03/18'),
    },
    {
      name: '予定内容4',
      timezone: 2,
      updated: new Date('2020/03/18'),
    }
  ];

  timeZoneId: TimeZoneData[] = [
    {
      id: 1,
      text: '朝',
      color: '#ffe5c5',
    },
    {
      id: 2,
      text: '昼',
      color: '#c5edff',
    },
    {
      id: 3,
      text: '夜',
      color: '#d3c5ff',
    }
  ];


  constructor() { }
  ngOnInit() {
  }


}
