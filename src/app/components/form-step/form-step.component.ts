import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.css']
})
export class FormStepComponent implements OnInit {

  constructor() { }

  env = environment;

  contacto:Object = {
    DatosBasicos: {
      TipoDocumento: null,  
      NumeroDocumento: null,  
      Nombre1: null,  
      Celular: null,  
      CorreoPersonal: null
    },
  
    DatosFinancieros: {  
      ActividadEconomica: null,  
      ActividadIndependiente: 3,  
      IngresoMensual: null  
    },
  
    OtrosDatos: {  
      AutorizaConsultaCentrales: null,  
      AutorizaMareigua: null,  
      ValorFinanciar: null  
    }
  }

  /* Functions */

  oldLetters(event: any) {    
    const pattern =  new RegExp(environment.patternLetter);    
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  oldNumbers(event: any) {
    const pattern =  new RegExp(environment.patternNumber);    
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  chechedc(this){
    this.contacto.OtrosDatos.AutorizaMareigua = true       
  }

  currencyInputChanged(value) {
    let regexD = /(\d)(?=(\d{3})+(?!\d))/g;
    let regexN = /[^\d\.]+/g;
    value = value.toString().replace(regexN, "").replace(regexD, "$1,");
    console.log("value", value);    
    return value;    
  }

  ngOnInit() {
  }

}
