import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PartidosService } from 'src/app/services/partidos/partidos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(private servicio: PartidosService){}

  //metodo post

  guardarPartido(id: any, fecha: any, rival: any, resultado: any, figura: any, puntos: any){


      const tempI= +id
    const partido={
      id : tempI,
      foto: "https://elcomercio.pe/resizer/fj5zNnTZ9EiK-M6E4sdUgaQFF_k=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/HEQNY6A7YZHMTCBA4IBOEMVFRY.jpg",
      fecha : fecha,
      rival: rival,
      resultado: resultado,
      figura : figura,
      puntos: puntos
    }
    this.servicio.postPartidos(partido).subscribe()
  }

//put

editarPartidos(id: any, fecha: any, rival: any, resultado: any, figura: any, puntos: any){
  const tempI= +id
    const partido={
      id : tempI,
      foto: "https://elcomercio.pe/resizer/fj5zNnTZ9EiK-M6E4sdUgaQFF_k=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/HEQNY6A7YZHMTCBA4IBOEMVFRY.jpg",
      fecha : fecha,
      rival: rival,
      resultado: resultado,
      figura : figura,
      puntos: puntos
    }

    this.servicio.putPartidos(partido,tempI)
}
eliminarPartidos(id: any){
  this.servicio.deletePartido(id).subscribe()
    }



}
