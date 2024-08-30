import { Component } from '@angular/core';

import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-apartado2',
  templateUrl: './apartado2.component.html',
  styleUrls: ['./apartado2.component.css']
})
export class Apartado2Component {
  public info: Libro[];


  constructor() {
    this.info = [
      {
        id: "",
        titulo: "And the there were none",
        genero: "terror",
        portada: "https://m.media-amazon.com/images/I/81nChcVy7CL._AC_UF1000,1000_QL80_.jpg",
        mostrarInfo: false
      },

      {
        id: "",
        titulo: "El resplandor",
        genero: "",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxMZbnlAmDMT2Cj4AnarrDdWI6VYMupvnNQ&s",
        mostrarInfo: false
      },

      {
        id: "",
        titulo: "El exorcista",
        genero: "",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCyQaa9q_5CdQZVnruSkRXAtURqIdFnA4gA&s",
        mostrarInfo: false
      },

      {
        id: "",
        titulo: "La llamada a chtulhu",
        genero: "",
        portada: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/4/3b6448a7-76ec-4173-a173-9f04ff004233/9789878354521.jpg",
            mostrarInfo: false
      },

      {
        id: "",
        titulo: "La cosa",
        genero: "",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9T8iGd1UWelH2TJtYEGzYRcxBjOOOKMyDDQ&s",
            mostrarInfo: false
      },
      {
        id: "",
        titulo: "I have no mouth and i must scream",
        genero: "",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zJ3BuYLu3JWf7bkW1iDmP8S3i29ig8Ofew&s",
            mostrarInfo: false
      },
      {
        id: "",
        titulo: "El sotano",
        genero: "",
        portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/1e/7e/1e7e5a171b5f293d8fb19e0f055a55b1.jpg",
            mostrarInfo: false
      },
    ]
  }
  comprar() {
    alert('¡DEBES INICIAR SESION PARA PODER COMPRAR!');
  }
}
