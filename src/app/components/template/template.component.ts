import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  constructor() { }

  contacto:Object = {
    DatosBasicos: {
      TipoDocumento: 1,  
      NumeroDocumento: null,  
      Nombre1: null,  
      Celular: null,  
      CorreoPersonal: null  
    },
  
    DatosFinancieros: {  
      ActividadEconomica: 1,  
      ActividadIndependiente: 3,  
      IngresoMensual: 0  
    },
  
    OtrosDatos: {  
      AutorizaConsultaCentrales: false,  
      AutorizaMareigua: false,  
      ValorFinanciar: 0  
    }
  }

  /* [(checked)]="contacto.OtrosDatos.AutorizaMareigua" */

  guardar(form:NgForm){
    console.log("Formulario Posteado");
    console.log("Forma ", form);   
    console.log("Forma.value ", form.value); 
    console.log("Contacto", this.contacto);
      
    
  }

}
