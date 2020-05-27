import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { ClientForAuth } from '../models/client/clientForAuth';

@Injectable()
export class AuthService extends BaseService {
  private urlAuth: string;

  public constructor(httpClient: HttpClient) {
    super(httpClient);
    this.urlAuth = environment.urlAPI + 'auth';
  }

  public login(clientForAuth: ClientForAuth) {
    return this.post(this.urlAuth, clientForAuth);
  }
}
