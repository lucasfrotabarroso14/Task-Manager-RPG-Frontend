import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  loginError : string ='';
  
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (response: any) => {
          this.router.navigate(['/home']);
        },
        (error) => {
          this.loginError = 'Credenciais inválidas. Por favor, tente novamente.';
        }
      );
  }
  


}
