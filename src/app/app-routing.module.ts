import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ContactosComponent } from './screens/contactos/contactos.component';
import { JugadoresComponent } from './screens/jugadores/jugadores.component';
import { PartidosComponent } from './screens/partidos/partidos.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { ResultadosComponent } from './screens/resultados/resultados.component';
import { UbicacionComponent } from './screens/ubicacion/ubicacion.component';
import { Error404Component } from './screens/error404/error404.component';
import { TiendaComponent } from './screens/tienda/tienda.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'contactos' , component: ContactosComponent},
  {path: 'jugadores', component: JugadoresComponent},
  {path: '', redirectTo: "home", pathMatch: 'full'},
  {path: 'partidos', component: PartidosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'resultados', component: ResultadosComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: '**', component: Error404Component},
  {path: 'carrito-compras', component: CarritoComprasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
