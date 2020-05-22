import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { isNullOrUndefined } from 'util';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';

import { ClientForList } from 'src/app/models/client/clientForList';
import { ClientService } from 'src/app/services/client.service';
import { ClientCreateUpdateComponent } from '../client-create-update/client-create-update.component';
import { ClientForCreateUpdate } from 'src/app/models/client/clientForCreateUpdate';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  public clients: ClientForList[] = [];
  private clientForCreateUpdate = new ClientForCreateUpdate();
  public displayedColumns: string[] = ['name', 'socialSecurityNumber', 'dateOfBirth', 'sex', 'address', 'occupation', 'active'];
  public dataSource: MatTableDataSource<ClientForList>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  private horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private clientService: ClientService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ClientForList>(this.clients);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getClients();
  }

  private getClients(): void {
    this.clientService.getClients().subscribe(next => {
      this.dataSource.data = next;
    }, () => {
    });
  }

  public addClient(): void {
    const dialogRef = this.dialog.open(ClientCreateUpdateComponent, {
      width: '60%',
      data: {
        description: 'Cadastrar Cliente',
        clientForCreateUpdate: this.clientForCreateUpdate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!isNullOrUndefined(result)) {
        this.createClient(result);
      }
    });
  }

  private createClient(clientForRegister: ClientForCreateUpdate) {
    this.clientService.createClient(clientForRegister).subscribe(next => {
      this.openSnackBar('Ação com sucesso', 'Cadastrar');
      this.clientForCreateUpdate = new ClientForCreateUpdate();
      this.getClients();
    }, () => {
      this.openSnackBar('Ação falhou', 'Cadastrar');
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
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}