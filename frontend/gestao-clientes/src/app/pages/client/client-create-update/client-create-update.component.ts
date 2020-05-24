import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OccupationService } from 'src/app/services/occupation.service';
import { Occupation } from 'src/app/models/occupation/occupation';

@Component({
  selector: 'app-client-create-update',
  templateUrl: './client-create-update.component.html',
  styleUrls: ['./client-create-update.component.scss']
})
export class ClientCreateUpdateComponent implements OnInit {
  public occupations: Occupation[] = [];
  public genders: string[] = ['Feminino', 'Masculino', 'Outro'];

  constructor(
    private dialogRef: MatDialogRef<ClientCreateUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
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

  public onNoClick(): void {
    this.dialogRef.close();
  }
}