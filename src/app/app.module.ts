import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'; // 追加
// add router module
// import { RouterModule, Routes } from '@angular/router';

// add angular material module
import { MaterialModule } from './material/material.module';

// add flex layout module
import { FlexLayoutModule } from '@angular/flex-layout';

// add todo-input todo-list component
import { TodoInputComponent } from './containers/todo-input/todo-input.component';
import { TodoListComponent } from './containers/todo-list/todo-list.component';

// const appRoutes: Routes = [ // 追加
//   { path: '', component: 対象コンポーネント },
// ];

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(appRoutes), // 追加
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
