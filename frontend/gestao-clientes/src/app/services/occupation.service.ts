import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { BaseService } from './base.service';

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
}
