import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-apartado3',
  templateUrl: './apartado3.component.html',
  styleUrls: ['./apartado3.component.css']
})
export class Apartado3Component {
  public info: Libro[];


  constructor() {
    this.info = [
      {
        id: "",
        titulo: "El hobbit",
        genero: "terror",
        portada: "https://contentv2.tap-commerce.com/cover/large/9789505472697_1.jpg?id_com=1156",
        mostrarInfo: false
      },

      {
        id: "",
        titulo: "el principito",
        genero: "Fantasia",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTpwoDBsM9mKzjKSZS7Ke99z1cJboypiPfQ&s",
        mostrarInfo: false
      },

      {
        id: "",
        titulo: "alicia en el pais de las maravillas",
        genero: "Fantasia",
        portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/d0/0a/d00af29b874c7ab6a7bbd56f246d92f8.jpg",
        mostrarInfo: false
      },

      {
        id: "",
        titulo: "El rey Arturo y los caballeros de la mesa redonda",
        genero: "Fantasia",
        portada: "https://http2.mlstatic.com/D_NQ_NP_705969-MLA53161696080_012023-O.webp",
        mostrarInfo: false
      },

      {
        id: "",
        titulo: "El mago de Oz",
        genero: "Fantasia",
        portada: "https://acdn.mitiendanube.com/stores/001/081/567/products/magooz1-b8cd7c9620e14ea87615816944370174-480-0.jpg",
        mostrarInfo: false
      },
      {
        id: "",
        titulo: "El corazón de la espada",
        genero: "Fantasia",
        portada: "https://www.eltemplodelasmilpuertas.com/biblioteca/portadas/9788467898569.jpg",
        mostrarInfo: false
      },
      {
        id: "",
        titulo: "Elric. Primer Ciclo: Melniboné",
        genero: "Fantasia",
        portada: "https://i0.wp.com/carlosjeguren.com/wp-content/uploads/2022/10/elric-resena.jpg?fit=1434%2C2000&ssl=1",
        mostrarInfo: false
      },
    ]
  }
  comprar() {
    alert('¡DEBES INICIAR SESION PARA PODER COMPRAR!');
  }
}
