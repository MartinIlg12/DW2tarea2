import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http : HttpClient) { }
  private API_TIENDA = "http://localhost:3000/productos"


  //Metodo GET
  getTienda(): Observable <any>{
    return this.http.get(this.API_TIENDA)
  }

  //Metodo Post
  postTienda(producto: any): Observable <any>{
    return this.http.post(this.API_TIENDA, producto)
  }
}
