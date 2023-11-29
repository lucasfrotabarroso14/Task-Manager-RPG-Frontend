import { Component, Input, OnInit } from '@angular/core';
import { TaskLevelCount } from 'src/app/tasks/task-interface';

@Component({
  selector: 'app-pizza-chart',
  templateUrl: './pizza-chart.component.html',
  styleUrls: ['./pizza-chart.component.scss']
})
export class PizzaChartComponent implements OnInit {
  data: any;
  @Input() taskLevelCounted !: TaskLevelCount ;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
     
      console.log(this.taskLevelCounted);
      

      this.data = {
          labels: ['Fácil', 'Médio', 'Difícil'],
          datasets: [
              {
                  data: [this.taskLevelCounted.facil, this.taskLevelCounted.medio, this.taskLevelCounted.dificil],
                  backgroundColor: [documentStyle.getPropertyValue('--green-700'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--red-700')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--green-900'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--red-500')]
              }
          ]
      };

      this.options = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor
                  }
              }
          }
      };
  }
}