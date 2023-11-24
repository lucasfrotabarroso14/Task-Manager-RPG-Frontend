import { Component } from '@angular/core';
import { AuthService } from '../login-page/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  email : string = ''
  username: string = '';
  password: string = '';
  openmodal :boolean = false
  
  registerError : string ='';
  
  constructor(private authService: AuthService, private router: Router) {}

  OnRegister(){
    this.authService.register(this.email,this.username,this.password)
    .subscribe(
      (response : any)=> {
        this.openmodal = true
        this.router.navigate(['/login'])
      },
      (error)=>{
        this.registerError="Erro ao realizar o registro"
      }
    )

  }
  
  


}
