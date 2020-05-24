import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { BaseService } from './base.service';
import { ClientForCreateUpdate } from '../models/client/clientForCreateUpdate';
import { ClientForList } from '../models/client/clientForList';

@Injectable()
export class ClientService extends BaseService {
  private clientUrl: string;

  constructor(http: HttpClient) {
    super(http);
    this.clientUrl = environment.urlAPI + 'client';
  }

  public getClients(): Observable<any> {
    const queryString = this.createQueryString(null);
    return this.get(this.clientUrl, queryString);
  }

  public createClient(clientForRegister: ClientForCreateUpdate): Observable<any> {
    return this.post(`${this.clientUrl}`, clientForRegister);
  }

  public editClient(clientForEdit: ClientForCreateUpdate): Observable<any> {
    return this.put(this.clientUrl, clientForEdit);
  }

  public deleteClient(clientForList: ClientForList): Observable<any> {
    return this.delete(this.clientUrl, `${clientForList.id}`);
  }

  public activateClient(clientForList: ClientForList): Observable<any> {
    return this.put(`${this.clientUrl}/activate/${clientForList.id}`, null);
  }

  public inactivateClient(clientForList: ClientForList): Observable<any> {
    return this.put(`${this.clientUrl}/inactivate/${clientForList.id}`, null);
  }
}