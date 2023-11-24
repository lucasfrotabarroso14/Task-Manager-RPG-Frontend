import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false

  private apiUrl ='http://127.0.0.1:8000/api/token/'

  private apiUrlRegister ='http://127.0.0.1:8000/account/'

  constructor(private http: HttpClient) { }
  isAutheticatedUser():boolean {
    return this.isAuthenticated 
  }

  register(email: string, username: string, password : string){
    const body = {username, email,  password};
    console.log(body);
    
    return this.http.post(this.apiUrlRegister,body)

  }

  login(username: string, password: string){
    const body = { username,password };
    return this.http.post(this.apiUrl,body).pipe(
      tap((response:any)=> {
        localStorage.setItem('access_token',response.access);
        localStorage.setItem('refresh_token',response.refresh)
        this.isAuthenticated = true
      })
      
    );


}
  
  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token')
    this.isAuthenticated = false
  }
    


}