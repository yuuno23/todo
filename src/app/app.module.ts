import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
// add router module
import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

// add angular material module
// import { MaterialModule } from './material/material.module';

// add flex layout module
// import { FlexLayoutModule } from '@angular/flex-layout';

import { TodoModule } from './todo/todo.module';
import { AppStoreModule } from './app-store/app-store.module';

// const appRoutes: Routes = [ // 追加
//   { path: '', component: 対象コンポーネント },
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes), // 追加
    // FlexLayoutModule,
    FormsModule,
    // MaterialModule,
    TodoModule,
    AppStoreModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
