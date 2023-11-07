import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  constructor(private http: HttpClient) { }
  private API_RESULTADOS = "http://localhost:3000/resultados"

  getResultado(): Observable <any>{
    return this.http.get(this.API_RESULTADOS)
  }
}
