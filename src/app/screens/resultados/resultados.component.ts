import { Component } from '@angular/core';
import { ResultadosService } from 'src/app/services/resultados/resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  constructor(private resultado: ResultadosService){}
  dataResultado: any ={}

  ngOnInit(){
    this.resultado.getResultado().subscribe(resultado =>{
      this.dataResultado = resultado
    })
  }

}
