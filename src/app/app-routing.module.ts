import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskPageComponent } from './pages/task-page/task-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path:'tasks', component: TaskPageComponent},
  {path:'', component: HomeComponent},
  {path:'login',component:LoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
