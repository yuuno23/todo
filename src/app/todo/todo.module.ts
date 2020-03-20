import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
// add angular material module
import { MaterialModule } from '../material/material.module';

// add flex layout module
import { FlexLayoutModule } from '@angular/flex-layout';

// add todo container
import { TodoComponent } from './containers/todo/todo.component';

// add todo-input todo-list component
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';

// add
import { TodoStoreModule } from './store/todo-store.module';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent,
    TodoComponent,
    TodoListItemComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    TodoStoreModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    TodoListComponent,
    TodoFormComponent
  ]
})
export class TodoModule { }
