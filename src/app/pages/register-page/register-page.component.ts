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
  visible: boolean = false
  dialogMessage: string =''
  
  registerError : string ='';
  
  constructor(private authService: AuthService, private router: Router) {}
  openAndCloseDialog(){
    
    return this.visible= !this.visible
  }
  
  onRegister(){
    this.authService.register(this.email,this.username,this.password)
    .subscribe(
      (response : any)=> {
        this.dialogMessage='Registrado com Sucesso!'
        this.openAndCloseDialog()
     
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000); 
      },
      (error)=>{
        this.dialogMessage="Erro ao realizar o registro"
        this.openAndCloseDialog()
        setTimeout(() => {
         this.openAndCloseDialog();
        }, 3000); 
      }
    )

  }
  
  


}
