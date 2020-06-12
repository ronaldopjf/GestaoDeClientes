import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { BaseService } from './base.service';
import { Occupation } from '../models/occupation/occupation';

@Injectable()
export class OccupationService extends BaseService {
  private occupationUrl: string;

  public constructor(http: HttpClient) {
    super(http);
    this.occupationUrl = environment.urlAPI + 'occupation';
  }

  public getOccupations(): Observable<any> {
    const queryString = this.createQueryString(null);
    return this.get(this.occupationUrl, queryString);
  }

  public createOccupation(occupationForRegister: Occupation): Observable<any> {
    return this.post(this.occupationUrl, occupationForRegister);
  }

  public editOccupation(occupationForEdit: Occupation): Observable<any> {
    return this.put(this.occupationUrl, occupationForEdit);
  }

  public deleteOccupation(occupationForDelete: Occupation): Observable<any> {
    return this.delete(this.occupationUrl, `${occupationForDelete.id}`);
  }

  public activateOccupation(occupationForActivate: Occupation): Observable<any> {
    return this.put(`${this.occupationUrl}/activate/${occupationForActivate.id}`, null);
  }

  public inactivateOccupation(occupationForInactivate: Occupation): Observable<any> {
    return this.put(`${this.occupationUrl}/inactivate/${occupationForInactivate.id}`, null);
  }
}
