import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskComponent } from './addtask/addtask.component';

//material design modules
import {MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

//injectour service
import { TodoService } from './todo.service';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TasksComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  entryComponents: [AddtaskComponent,],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
