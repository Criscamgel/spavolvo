import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  constructor() { }

  guardar(form:NgForm){
    console.log("Formulario Posteado");
    console.log("Forma ", form);   
    console.log("Forma.value ", form.value);   
    
  }

}
