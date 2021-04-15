import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rest } from '../models/rest.modal';
const baseUrl = 'http://localhost:8080/api/tutorials'
@Injectable({
    providedIn: 'root'
  })
  export class RestService {
  
    constructor(private http: HttpClient) { }
  
    getAll(): Observable<Rest[]> {
      return this.http.get<Rest[]>(baseUrl);
    }
  
   
  }
  