import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { isNullOrUndefined } from 'util';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as xlsx from 'xlsx';

import { ClientForList } from 'src/app/models/client/clientForList';
import { ClientService } from 'src/app/services/client.service';
import { ClientCreateUpdateComponent } from '../client-create-update/client-create-update.component';
import { ClientForCreateUpdate } from 'src/app/models/client/clientForCreateUpdate';
import { ConfirmDialogComponent } from 'src/shared/confirm/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  public clients: ClientForList[] = [];
  private clientForCreateUpdate = new ClientForCreateUpdate();
  public displayedColumns: string[] = ['name', 'socialSecurityNumber', 'dateOfBirth', 'sex', 'email', 'occupation', 'actions'];
  public dataSource: MatTableDataSource<ClientForList>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('epltable', { static: false }) epltable: ElementRef;

  public constructor(
    private clientService: ClientService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ClientForList>(this.clients);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getClients();
    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property === 'occupation') {
        return item.occupation.name;
      } else {
        return item[property];
      }
    };
  }

  private getClients(): void {
    this.clientService.getClients().subscribe(result => {
      this.dataSource.data = result;
    }, () => {
      this.openSnackBar('A ação falhou', 'Listar Clientes');
    });
  }

  public createClient(): void {
    const dialogRef = this.dialog.open(ClientCreateUpdateComponent, {
      width: '60%',
      data: {
        description: 'Criar Cliente',
        clientForCreateUpdate: this.clientForCreateUpdate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.clientForCreateUpdate = new ClientForCreateUpdate();
      if (!isNullOrUndefined(result)) {
        this.registerClient(result);
      }
    });
  }

  private registerClient(clientForRegister: ClientForCreateUpdate): void {
    this.clientService.createClient(clientForRegister).subscribe(result => {
      this.openSnackBar('Ação realizada com sucesso', 'Criar Cliente');
      this.getClients();
    }, (error) => {
      this.openSnackBar(error.error.error, 'Criar Cliente');
    });
  }

  public updateClient(client: ClientForList): void {
    this.prepareClientForUpdate(client);
    const dialogRef = this.dialog.open(ClientCreateUpdateComponent, {
      width: '60%',
      data: {
        description: 'Atualizar Cliente',
        clientForCreateUpdate: this.clientForCreateUpdate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.clientForCreateUpdate = new ClientForCreateUpdate();
      if (!isNullOrUndefined(result)) {
        this.editClient(result);
      }
    });
  }

  private editClient(clientForEdit: ClientForCreateUpdate): void {
    this.clientService.editClient(clientForEdit).subscribe(result => {
      this.getClients();
      this.openSnackBar('Ação realizada com sucesso', 'Atualizar Cliente');
    }, (error) => {
      this.openSnackBar(error.error.error, 'Atualizar Cliente');
    });
  }

  private prepareClientForUpdate(client: ClientForList): void {
    this.clientForCreateUpdate.id = client.id;
    this.clientForCreateUpdate.name = client.name;
    this.clientForCreateUpdate.socialSecurityNumber = client.socialSecurityNumber;
    this.clientForCreateUpdate.dateOfBirth = client.dateOfBirth;
    this.clientForCreateUpdate.sex = client.sex;
    this.clientForCreateUpdate.email = client.email;
    this.clientForCreateUpdate.password = client.password;
    this.clientForCreateUpdate.active = client.active;
    this.clientForCreateUpdate.idAddress = client.address.id;
    this.clientForCreateUpdate.address = client.address;
    this.clientForCreateUpdate.idOccupation = client.occupation.id;
  }

  public confirmDeletion(clientForDelete: ClientForList): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Excluir Cliente', message: `Confirma a exclusão de ${clientForDelete.name}?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!isNullOrUndefined(result)) {
        this.inactivateClient(clientForDelete)
      }
    });
  }

  public inactivateClient(clientForInactivate: ClientForList): void {
    this.clientService.inactivateClient(clientForInactivate).subscribe(result => {
      this.openSnackBar('Ação realizada com sucesso', 'Excluir Cliente');
      this.getClients();
    }, () => {
      this.openSnackBar('A ação falhou', 'Excluir Cliente');
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public exportToExcel(): void {
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'tabela-de-clientes.xlsx');
  }

  public openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}