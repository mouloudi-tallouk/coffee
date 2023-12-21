import { Injectable } from '@angular/core';
import { Coffee } from '../shared/interfaces/coffee.interface';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiPath = environment.apiPath;

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  public getCoffees(size: number = 50): Observable<Array<Coffee>> {
    return this.http.get<Coffee[]>(`${apiPath}?size=${size}`, this.httpOptions).pipe(
      map((data: Coffee[]) => { return data })
    );
  }
}
