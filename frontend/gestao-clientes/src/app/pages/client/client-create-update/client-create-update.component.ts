import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Address } from 'src/app/models/address/address';
import { Occupation } from 'src/app/models/occupation/occupation';
import { OccupationService } from 'src/app/services/occupation.service';
import { PostalCodeService } from 'src/app/services/postal-code.service';

@Component({
  selector: 'app-client-create-update',
  templateUrl: './client-create-update.component.html',
  styleUrls: ['./client-create-update.component.scss']
})
export class ClientCreateUpdateComponent implements OnInit {
  public occupations: Occupation[] = [];
  public genders: string[] = ['Feminino', 'Masculino', 'Outro'];

  public constructor(
    private dialogRef: MatDialogRef<ClientCreateUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private occupationService: OccupationService,
    private postalCodeService: PostalCodeService,
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

  public getAddress(postalCode: string): void {
    this.postalCodeService.getAddress(postalCode).subscribe(result => {
      this.changeResultToAddress(result);
      return;
    }, () => {
      this.openSnackBar('A ação falhou', 'Buscar Endereço por CEP');
    });
  }

  private changeResultToAddress(result: any): void {
    this.data.clientForCreateUpdate.address.postalCode = result.cep;
    this.data.clientForCreateUpdate.address.publicPlace = result.logradouro;
    this.data.clientForCreateUpdate.address.complement = result.complemento;
    this.data.clientForCreateUpdate.address.neighborhood = result.bairro;
    this.data.clientForCreateUpdate.address.locality = result.localidade;
    this.data.clientForCreateUpdate.address.state = result.uf;
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  public onNoClick(): void {
    this.data.clientForCreateUpdate.address = new Address();
    this.dialogRef.close();
  }
}