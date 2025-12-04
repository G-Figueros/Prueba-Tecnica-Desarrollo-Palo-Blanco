import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InversionistasService {

  private API_URL = 'http://localhost:3000/inversionistas';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.API_URL, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
