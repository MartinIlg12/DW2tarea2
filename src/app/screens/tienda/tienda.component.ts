import { Component } from '@angular/core';
import { ItemCarrito } from 'src/app/entities/item-carrito';
import { TiendaService } from 'src/app/services/tienda/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  constructor(private tienda: TiendaService){}
  dataTienda : any={}

  ngOnInit(){
    this.tienda.getTienda().subscribe(tienda =>{
      this.dataTienda = tienda
    })
  }

  agregarCarrito(item: TiendaComponent){
    //console.log(item);



  }
}
