import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

import { TaskStatusCount } from 'src/app/tasks/task-interface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
    
  basicData: any;
  basicOptions: any;
  @Input() status_count!: TaskStatusCount;

  constructor(private cdRef: ChangeDetectorRef){}


  ngOnInit() {
    
    
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Pendente', 'Em Andamento', 'Concluido'],
      datasets: [
        {
          label: 'Tasks',
          data: [this.status_count.pendente, this.status_count.em_andamento, this.status_count.concluido], // Inicializa com valores zero
          backgroundColor: [
            '#d50c02', // Vermelho para 'Pendente'
            '#e56c02', // Amarelo para 'Em Andamento'
            '#018a01'  // Verde para 'Concluido'
          ],
          borderColor: [
            'black',
            'black',
            'black'
          ],
          borderWidth: 2
        }
      ]
    };
    this.cdRef.detectChanges();

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }


  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['status_count'] && this.status_count && this.basicData && this.basicData.datasets[0]) {
        this.updateChartData();
        console.log("on change chamou");
        
        
     
    }
  }

  updateChartData() {
    if (this.status_count) {
      this.basicData.datasets[0].data = [
        this.status_count.pendente,
        this.status_count.em_andamento,
        this.status_count.concluido
      ];
      this.cdRef.detectChanges();
      console.log("atualizou");
      
    }
  }
}
