import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    client: any;

    constructor(
        private router: Router,
        private snackBar: MatSnackBar,
        private authService: AuthService
    ) {
        this.client = this.authService.clientValue;
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.client) {
            return true;
        }

        this.openSnackBar('Você não pode acessar', 'Guarda Rotas');
        this.router.navigate(['/']);
        return false;
    }

    public openSnackBar(message: string, action: string): void {
        this.snackBar.open(message, action, {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    }
}