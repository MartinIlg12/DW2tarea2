import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './screens/home/home.component';
import { JugadoresComponent } from './screens/jugadores/jugadores.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { ResultadosComponent } from './screens/resultados/resultados.component';
import { ContactosComponent } from './screens/contactos/contactos.component';
import { UbicacionComponent } from './screens/ubicacion/ubicacion.component';
import { PartidosComponent } from './screens/partidos/partidos.component';
import { Error404Component } from './screens/error404/error404.component';
import { HttpClientModule } from "@angular/common/http";
import { TiendaComponent } from './screens/tienda/tienda.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    JugadoresComponent,
    ProductosComponent,
    ResultadosComponent,
    ContactosComponent,
    UbicacionComponent,
    PartidosComponent,
    Error404Component,
    TiendaComponent,
    CarritoComprasComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
