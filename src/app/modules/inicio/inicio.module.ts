import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio/inicio.component';
import { CardComponent } from './componentes/card/card.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';


//cuando usas material tenes que importarlo y exportarlo y los componentes que vos creeas se declaran y se exportan
@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  exports: [
    InicioComponent,
    CardComponent,
    CarruselComponent,
  ]
})
export class InicioModule { }
