import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

url: string = 'http://localhost:3000/libro';

  constructor(
    private http: HttpClient
  ) { }

get(): Observable<Libro[]>{
return this.http.get<Libro[]>(this.url);
}
}