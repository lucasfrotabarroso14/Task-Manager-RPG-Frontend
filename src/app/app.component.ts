import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showHeaderFooter: boolean = true;
  
  constructor(private router : Router){
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.showHeaderFooter =  event.url.includes('') || event.url.includes('tasks') || event.url.includes('profile')
       
      }
    }
      )
  }


  title = 'Task Manager';
}
