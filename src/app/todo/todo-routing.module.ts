import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './containers/todo/todo.component';

// root：path無し 遷移コンポーネント：path有り
const routes: Routes = [
  {path: '', component: TodoComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
