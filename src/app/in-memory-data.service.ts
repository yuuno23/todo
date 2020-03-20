import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo/models/todo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let todos: Todo[] = [];
    //　ローカルストレージにデータあるか確認
    const todoData= JSON.parse(localStorage.getItem('jsonVal'));
    if(todoData != null){
      console.log("= localStorage getItem =");
      todos = [todoData];
      console.log(todoData);
    }
    return { todos };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 11;
  }
}
