import { Component } from '@angular/core';
import { AuthService } from 'src/app/pages/login-page/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService : AuthService){}

  displayAddTaskDialog : boolean = false



  showDialog(){
    this.displayAddTaskDialog = !this.displayAddTaskDialog
    console.log(this.displayAddTaskDialog);
    
  }
  logout(){
    this.authService.logout()
  }

  
 
  
    
    
  
}
