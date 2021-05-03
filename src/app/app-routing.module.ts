import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailPageComponent } from './Pages/contact-detail-page/contact-detail-page.component';
import { ContactsPageComponent } from './Pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { TodosDetailPageComponent } from './Pages/todos-detail-page/todos-detail-page.component';
import { TodosPageComponent } from './Pages/todos-page/todos-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts/:id',
    component: ContactDetailPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'todos',
    component: TodosPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'todos/:id',
    component: TodosDetailPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
