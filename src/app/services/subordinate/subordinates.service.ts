import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubordinatesApiResponse } from './subordinates';

@Injectable({
  providedIn: 'root'
})

export class SubordinatesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getSubordinates(): Observable<SubordinatesApiResponse> {
    return this.httpClient.get<SubordinatesApiResponse>(`${environment.api.server}/subordinates.php`);
  }
}
