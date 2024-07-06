import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { Apartado1Component } from './pages/apartado1/apartado1.component';
import { Apartado2Component } from './pages/apartado2/apartado2.component';
import { Apartado3Component } from './pages/apartado3/apartado3.component';
import { ProductoComponent } from './pages/producto/producto.component';

//componentes de material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    Apartado1Component,
    Apartado2Component,
    Apartado3Component,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ProductoModule { }
