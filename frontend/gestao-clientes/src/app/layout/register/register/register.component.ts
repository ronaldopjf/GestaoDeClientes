import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Occupation } from 'src/app/models/occupation/occupation';
import { OccupationService } from 'src/app/services/occupation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public occupations: Occupation[] = [];

  public constructor(
    private occupationService: OccupationService,
    private snackBar: MatSnackBar
  ) { }

  public ngOnInit(): void {
    this.getOccupations();
  }

  private getOccupations(): void {
    this.occupationService.getOccupations().subscribe(next => {
      this.occupations = next;
    }, () => {
      this.openSnackBar('A ação falhou', 'Listar Cargos');
    });
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
