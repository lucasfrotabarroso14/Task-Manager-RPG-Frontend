import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TaskCardComponent } from './tasks/task-card/task-card.component';

import { CardModule } from 'primeng/card';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { TaskTableComponent } from './tasks/task-table/task-table.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { KanbanComponent } from './kanban/kanban.component';
import { DragDropModule } from 'primeng/dragdrop';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ChartModule } from 'primeng/chart';
import { ChartComponent } from './shared/components/chart/chart.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskCardComponent,
    TaskTableComponent,
    HomeComponent,
    TaskPageComponent,
    KanbanComponent,
    TaskFormComponent,
    ModalComponent,
    ChartComponent,
    LoginPageComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
    CardModule,
    HttpClientModule,
    TableModule,
    ToastModule,
    DragDropModule,
    ReactiveFormsModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    BrowserAnimationsModule,
    ChartModule
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
