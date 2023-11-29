import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { ChartComponent } from './components/chart/chart.component';
import { PizzaChartComponent } from './components/pizza-chart/pizza-chart.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    ChartComponent,
    PizzaChartComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
