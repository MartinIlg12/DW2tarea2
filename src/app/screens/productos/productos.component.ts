import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private producto: ProductosService){}
  dataProducto: any ={}

  ngOnInit(){
    this.producto.getProductos().subscribe(producto =>{
      this.dataProducto = producto
    })
  }

}
