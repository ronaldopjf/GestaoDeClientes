import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isNullOrUndefined } from 'util';

import { Occupation } from 'src/app/models/occupation/occupation';
import { OccupationService } from 'src/app/services/occupation.service';
import { OccupationCreateUpdateComponent } from '../occupation-create-update/occupation-create-update.component';
import { ConfirmDialogComponent } from 'src/shared/confirm/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-occupation-list',
  templateUrl: './occupation-list.component.html',
  styleUrls: ['./occupation-list.component.scss']
})
export class OccupationListComponent implements OnInit {
  public occupations: Occupation[] = [];
  private occupationForCreateUpdate = new Occupation();
  public displayedColumns: string[] = ['name', 'actions'];
  public dataSource: MatTableDataSource<Occupation>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public constructor(
    private occupationService: OccupationService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Occupation>(this.occupations);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getOccupations();
  }

  private getOccupations(): void {
    this.occupationService.getOccupations().subscribe(next => {
      this.dataSource.data = next;
    }, () => {
      this.openSnackBar('A ação falhou', 'Listar Cargos');
    });
  }

  public createOccupation(): void {
    const dialogRef = this.dialog.open(OccupationCreateUpdateComponent, {
      width: '60%',
      data: {
        description: 'Criar Cargo',
        occupationForCreateUpdate: this.occupationForCreateUpdate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.occupationForCreateUpdate = new Occupation();
      if (!isNullOrUndefined(result)) {
        this.registerOccupation(result);
      }
    });
  }

  private registerOccupation(occupationForRegister: Occupation): void {
    this.occupationService.createOccupation(occupationForRegister).subscribe(next => {
      this.openSnackBar('Ação realizada com sucesso', 'Criar Cargo');
      this.getOccupations();
    }, () => {
      this.openSnackBar('A ação falhou', 'Criar Cargo');
    });
  }

  public updateOccupation(occupation: Occupation): void {
    this.prepareOccupationForUpdate(occupation);
    const dialogRef = this.dialog.open(OccupationCreateUpdateComponent, {
      width: '60%',
      data: {
        description: 'Atualizar Cargo',
        occupationForCreateUpdate: this.occupationForCreateUpdate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.occupationForCreateUpdate = new Occupation();
      if (!isNullOrUndefined(result)) {
        this.editOccupation(result);
      }
    });
  }

  private editOccupation(occupationForEdit: Occupation): void {
    this.occupationService.editOccupation(occupationForEdit).subscribe(next => {
      this.openSnackBar('Ação realizada com sucesso', 'Atualizar Cargo');
      this.getOccupations();
    }, () => {
      this.openSnackBar('A ação falhou', 'Atualizar Cargo');
    });
  }

  private prepareOccupationForUpdate(occupation: Occupation): void {
    this.occupationForCreateUpdate.id = occupation.id;
    this.occupationForCreateUpdate.name = occupation.name;
  }

  public confirmDeletion(occupationForDelete: Occupation): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Excluir Cargo', message: `Confirma a exclusão de ${occupationForDelete.name}?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!isNullOrUndefined(result)) {
        this.inactivateOccupation(occupationForDelete)
      }
    });
  }

  public inactivateOccupation(occupation: Occupation): void {
    this.occupationService.inactivateOccupation(occupation).subscribe(next => {
      this.openSnackBar('Ação realizada com sucesso', 'Excluir Cargo');
      this.getOccupations();
    }, () => {
      this.openSnackBar('A ação falhou', 'Excluir Cargo');
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
