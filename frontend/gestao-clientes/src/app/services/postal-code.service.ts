import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class PostalCodeService {
  private postalCodeUrl: string;

  public constructor(private httpClient: HttpClient) {
    this.postalCodeUrl = environment.urlPostalCode;
  }

  public getAddress(postalCode: string): Observable<any> {
    return this.httpClient.get(`${this.postalCodeUrl}/${postalCode}/json/`);
  }
}
