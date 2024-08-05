import { Component } from '@angular/core';
//IMPORTAMOS LA INTERFAZ PARA CIUDAD
import { Libro } from 'src/app/models/libro';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //PROPIEDAD PUBLICA --> TIPO ARRAY
  public info: Libro[];

  //INICIALIZAR LA PROPIEDAD INFO
  constructor() {
    this.info = [
      {
        id: "",
        titulo: "And the there were none",
        genero: "terror",
        portada: "https://m.media-amazon.com/images/I/81nChcVy7CL._AC_UF1000,1000_QL80_.jpg"
      },

      {
        id: "",
        titulo: "el principito",
        genero: "ficcion",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTpwoDBsM9mKzjKSZS7Ke99z1cJboypiPfQ&s"
      },

      {
        id: "",
        titulo: "alicia en el pais de las maravillas",
        genero: "Fantasia",
        portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/d0/0a/d00af29b874c7ab6a7bbd56f246d92f8.jpg"
      },
    ]
  }

  comprar() {
    alert('¡DEBES INICIAR SESION PARA PODER COMPRAR!');
  }

}
