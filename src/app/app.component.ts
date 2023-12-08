import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showHeaderFooter: boolean = false;
  
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // O cabeçalho e o rodapé não devem ser mostrados na rota de login e registro
        this.showHeaderFooter = !(event.url.endsWith('/login') || event.url.endsWith('/register'));
      }
    });
  }

  title = 'Task Manager';
}
