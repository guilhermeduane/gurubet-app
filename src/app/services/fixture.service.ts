import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Fixture } from '../../../public/domain/fixture';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  private baseUrl = 'http://localhost:8080/api/fixtures';

  constructor(private httpClient: HttpClient) {}

  getFixtureList(): Observable<Fixture[]> {
    return this.httpClient.get<Fixture[]>(this.baseUrl).pipe(
      map(response => response) // You can perform additional transformation if needed
    );
  }
}
