import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosModule } from './nosotros.module';
import { DescripcionComponent } from './descripcion/descripcion.component';


const routes: Routes = [

  {
    path:"descripcion",component:DescripcionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
