import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-apartado1',
  templateUrl: './apartado1.component.html',
  styleUrls: ['./apartado1.component.css']
})

export class Apartado1Component {
  
  public info: Libro[];


  constructor() {
    this.info = [
      {
        id: "",
        titulo: "Cien años en soledad",
        genero: "terror",
        portada: "https://covers.alibrate.com/b/59872e8acba2bce50c1a6d96/b0bf30dd-8585-4a46-9229-c72a94282fbe/share"
      },

      {
        id: "",
        titulo: "1984",
        genero: "ficcion",
        portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/b0/39/b039af065268818b7bd3b0e016f8db65.jpg"
      },

      {
        id: "",
        titulo: "El gran gatsby",
        genero: "Fantasia",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhNe9mvkhOeXA_6mZvHVZrAQD-zCRv2lUA3j_aj00Xt8SrwP34n2ni0Okx2GmmDDDm_4&usqp=CAU"
      },

      {
        id: "",
        titulo: "La carretera",
        genero: "Fantasia",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/92/0f/920f6258377057dde09a8c7df4e65562.jpg"
      },

      {
        id: "",
        titulo: "La sombra del viento",
        genero: "Fantasia",
        portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/aa/d8/aad8db0b27a7bfcefafc4e13a66ddac6.jpg"
      },
      {
        id: "",
        titulo: "El hombre de la rosa",
        genero: "Fantasia",
        portada: "https://www.ecured.cu/images/c/ce/6-el-nombre-de-la-rosa1.jpg"
      },
      {
        id: "",
        titulo: "Donde los arboles cantan",
        genero: "Fantasia",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxweGJVXXwVsMGW4TIInOFMEAb-c3-PWLbQ&s"
      },
    ]
  }
  comprar() {
    alert('¡DEBES INICIAR SESION PARA PODER COMPRAR!');
  }
}
