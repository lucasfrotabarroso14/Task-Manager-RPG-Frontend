import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { TaskPageComponent } from './task-page/task-page.component';
import { TaskTableComponent } from '../tasks/task-table/task-table.component';




@NgModule({
  declarations: [
      
  
              TaskPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
  // exports: [
  //   HomeComponent
  // ]
})
export class PagesModule { }
