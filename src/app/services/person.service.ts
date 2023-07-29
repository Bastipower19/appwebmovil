import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Person {
  id?: number;
  Nombre: string;
  Apellido: string;
  Email: string;
}
@Injectable({
  providedIn: 'root'
})

export class PersonService {

  private apiUrl = 'http://localhost:8080/ms-datasource/v1.0/api/person'; 
  nuevoDato: any = {
    Nombre: '',
    Apellido: '',
    Email: '',
  }

  constructor(private http: HttpClient) { }

  getPerson() {
    return this.http.get<Person[]>(`${this.apiUrl}/getPersonas`);
  }
  deletePerson(id: number) {
    const url = `${this.apiUrl}/deletePersona${id}`;
    return this.http.delete(url);
  }

  getPersonById(id: string) {
    return this.http.get<Person>(`${this.apiUrl}/getPersona/${id}`);
  }

  updatePers(id: number, pers: Person) {
    return this.http.put(`${this.apiUrl}/putPersona/${id}`, pers);
  }
  savePersona(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/postPersona', this.nuevoDato);
  }
}
