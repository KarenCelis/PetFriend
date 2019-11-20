import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-propio-publicaciones',
  templateUrl: './perfil-propio-publicaciones.component.html',
  styleUrls: ['./perfil-propio-publicaciones.component.css']
})
export class PerfilPropioPublicacionesComponent implements OnInit {
  nombreUsuario: string;
  tituloPublicacion: string;
  descripcionPublicacion: string;
  constructor() { }

  ngOnInit() {
    this.nombreUsuario = 'aaa';
    this.tituloPublicacion = 'Titulo';
    this.descripcionPublicacion = 'Descripcion';
  }

}
