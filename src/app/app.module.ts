import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ContactsPageComponent } from './Pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './Pages/contact-detail-page/contact-detail-page.component';
import { TodosPageComponent } from './Pages/todos-page/todos-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TodosDetailPageComponent } from './Pages/todos-detail-page/todos-detail-page.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { ContactListComponent } from './views/contact/contact-list/contact-list.component';
import { TaskListComponent } from './views/task/task-list/task-list.component';
import { TaskComponent } from './components/task/task/task.component';
import { ToolbarComponent } from './components/toolbar/toolbar/toolbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    ContactsPageComponent,
    ContactDetailPageComponent,
    TodosPageComponent,
    NotFoundPageComponent,
    TodosDetailPageComponent,
    LoginFormComponent,
    ContactListComponent,
    TaskListComponent,
    TaskComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
