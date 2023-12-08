import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskPageComponent } from './pages/task-page/task-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './shared/auth-guards';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  { path:'tasks', component: TaskPageComponent},//canActivate:[AuthGuard]
  {path:'', component: HomeComponent}, //canActivate:[AuthGuard]
  {path:'login',component:LoginPageComponent,},
  {path:'register',component:RegisterPageComponent},
  {path:'profile', component:ProfilePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
