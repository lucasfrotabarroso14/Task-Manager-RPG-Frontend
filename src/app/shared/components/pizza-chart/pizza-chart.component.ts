import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-chart',
  templateUrl: './pizza-chart.component.html',
  styleUrls: ['./pizza-chart.component.scss']
})
export class PizzaChartComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [540, 325, 702],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-700'), documentStyle.getPropertyValue('--brown-500'), documentStyle.getPropertyValue('--red-700')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-900'), documentStyle.getPropertyValue('--black-400'), documentStyle.getPropertyValue('--brown-500')]
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