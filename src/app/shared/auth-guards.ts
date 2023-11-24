import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../pages/login-page/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAutheticatedUser()) {
      return true; // O usuário está autenticado, permita o acesso à rota
    } else {
      this.router.navigate(['/login']); // Redirecione para a página de login se o usuário não estiver autenticado
      return false; // Não permita o acesso à rota protegida
    }
  }
}
