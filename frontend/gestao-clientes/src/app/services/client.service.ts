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

  public constructor(http: HttpClient) {
    super(http);
    this.clientUrl = environment.urlAPI + 'client';
  }

  public getClients(): Observable<any> {
    const queryString = this.createQueryString(null);
    return this.get(this.clientUrl, queryString);
  }

  public createClient(clientForRegister: ClientForCreateUpdate): Observable<any> {
    return this.post(this.clientUrl, clientForRegister);
  }

  public editClient(clientForEdit: ClientForCreateUpdate): Observable<any> {
    return this.put(this.clientUrl, clientForEdit);
  }

  public deleteClient(clientForDelete: ClientForList): Observable<any> {
    return this.delete(this.clientUrl, `${clientForDelete.id}`);
  }

  public activateClient(clientForActivate: ClientForList): Observable<any> {
    return this.put(`${this.clientUrl}/activate/${clientForActivate.id}`, null);
  }

  public inactivateClient(clientForInactivate: ClientForList): Observable<any> {
    return this.put(`${this.clientUrl}/inactivate/${clientForInactivate.id}`, null);
  }
}