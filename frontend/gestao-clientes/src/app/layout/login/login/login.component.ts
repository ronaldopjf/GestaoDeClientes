import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { ClientForList } from 'src/app/models/client/clientForList';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public clientForLogin = new ClientForList();

  public constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  public ngOnInit(): void {
  }

  public login(): void {
    if (this.validateFields()) {
      this.authService.login(this.clientForLogin).subscribe(next => {
        this.openSnackBar('Ação realizada com sucesso', 'Login');
        localStorage.setItem('loggedInCustomer', next);
        this.router.navigate(['/root']);
      }, () => {
        this.openSnackBar('A ação falhou', 'Login');
      });
    }
  }

  private validateFields(): boolean {
    if (!this.clientForLogin.email || !this.clientForLogin.password) {
      return false;
    }
    return true;
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
