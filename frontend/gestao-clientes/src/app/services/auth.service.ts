import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { ClientForAuth } from '../models/client/clientForAuth';
import { ClientForList } from '../models/client/clientForList';

@Injectable()
export class AuthService extends BaseService {
  private urlAuth: string;
  private clientSubject: BehaviorSubject<ClientForList>;
  public client: Observable<ClientForList>;

  public constructor(
    private router: Router,
    httpClient: HttpClient
  ) {
    super(httpClient);
    this.urlAuth = environment.urlAPI + 'auth';
    this.clientSubject = new BehaviorSubject<ClientForList>(JSON.parse(localStorage.getItem('client')));
    this.client = this.clientSubject.asObservable();
  }

  public get clientValue(): ClientForList {
    return this.clientSubject.value;
  }

  public login(clientForAuth: ClientForAuth): Observable<any> {
    return this.post(`${this.urlAuth}/authenticate`, clientForAuth).pipe(map(response => {
      localStorage.setItem('client', JSON.stringify(response.client));
      localStorage.setItem('token', JSON.stringify(response.token));
      this.clientSubject.next(response.client);
      return response.client;
    }));
  }

  public logout(): void {
    localStorage.removeItem('client');
    localStorage.removeItem('token');
    this.clientSubject = null;
    this.router.navigate(['/']);
  }
}
