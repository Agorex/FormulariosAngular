import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }
  `]
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: null,
    acepta: false
  };

  paises = [{
    codigo: 'CHI',
    nombre: 'Chile'
  },
  {
    codigo: 'BRA',
    nombre: 'Brasil'
  }
  ]

  sexos:string[] = ['Hombre', 'Mujer']

  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('ngForm', forma);
    console.log('valor', forma.value);
    console.log('Usuario', this.usuario);
  }

}
