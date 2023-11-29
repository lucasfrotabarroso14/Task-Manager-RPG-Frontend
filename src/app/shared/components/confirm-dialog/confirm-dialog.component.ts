
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService,ConfirmEventType } from 'primeng/api';
import { AuthService } from 'src/app/pages/login-page/auth.service';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private authService : AuthService,  private router: Router) {}

  onLogout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }

  confirm1() {
      this.confirmationService.confirm({
          accept: () => {
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
          },
          reject: (type: ConfirmEventType) => {
              switch (type) {
                  case ConfirmEventType.REJECT:
                      this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                      break;
                  case ConfirmEventType.CANCEL:
                      this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                      break;
              }
          }
      });
  }
}

