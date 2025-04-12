import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashboardComponent } from './shared/components/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/components/todo-dashboard/todo-form/todo-form.component';
import { StudentDashboardComponent } from './shared/components/student-dashboard/student-dashboard.component';
import { TodoListComponent } from './shared/components/todo-dashboard/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StudentFormComponent } from './shared/components/student-dashboard/student-form/student-form.component';
import { StudentInfoComponent } from './shared/components/student-dashboard/student-info/student-info.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    StudentDashboardComponent,
    TodoListComponent,
    StudentFormComponent,
    StudentInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
