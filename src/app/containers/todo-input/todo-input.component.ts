import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  timeZoneText: string;
  timeZones: string[] = ['朝', '昼', '夜'];
  constructor() { }

  ngOnInit(): void {
  }

}
