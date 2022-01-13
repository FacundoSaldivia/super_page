import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { result } from '../models/result';
import { Super } from '../models/superheroe';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  url: string = `https://www.superheroapi.com/api.php/4814442855265599/`;
  constructor(private http: HttpClient) {}

  getResult(name: string): Observable<result> {
    return this.http.get<result>(`${this.url}search/${name}`);
  }

  getHero(id: string): Observable<Super> {
    return this.http.get<Super>(`${this.url}${id}`);
  }
}
