import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskPageComponent } from './pages/task-page/task-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:'tasks', component: TaskPageComponent},
  {path:'home', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
