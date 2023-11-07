import { Component } from '@angular/core';
import { PartidosService } from 'src/app/services/partidos/partidos.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent {
  constructor(private partido: PartidosService){}
  dataPartido: any ={}

  ngOnInit(){
    this.partido.getPartidos().subscribe(partido =>{
      this.dataPartido=partido
    })
  }
}
