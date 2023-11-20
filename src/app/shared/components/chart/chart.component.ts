import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  basicData: any;

  basicOptions: any;

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
                  data: [540, 325, 702, 620],
                  backgroundColor: [
                    '#d50c02', // Vermelho com transparência para 'Pendente'
                    '#e56c02', // Amarelo com transparência para 'Em Andamento'
                    '#018a01' 
                ],
                  borderColor: [
                    'black',
                    'black',
                    'black'],
                  borderWidth: 1.5
              }
          ]
      };

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
}