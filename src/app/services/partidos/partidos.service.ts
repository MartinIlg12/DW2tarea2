import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  constructor(private http: HttpClient) { }
  private API_PARTIDOS = "http://localhost:3000/partidos"

  getPartidos():Observable <any>{
    return this.http.get(this.API_PARTIDOS)
  }

  //metodo Post

  postPartidos(partido: any): Observable <any>{
    return this.http.post(this.API_PARTIDOS, partido)
  }

  //metodo put
  putPartidos(partido: any, id: any): Observable <any>{
     this.API_PARTIDOS= `${this.API_PARTIDOS}/${id}`   
    return this.http.put(this.API_PARTIDOS, partido)
  }

  //eliminar

  deletePartido(id: any):Observable <any>{
    this.API_PARTIDOS=`${this.API_PARTIDOS}/${id}`
    return this.http.delete(this.API_PARTIDOS)
  }
}
