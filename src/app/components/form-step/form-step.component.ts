import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CentralesService } from '../../services/centrales.service';


@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.css']
})
export class FormStepComponent{

  constructor(private centrales: CentralesService) { }
  

  mail = RegExp("^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$");
  env = environment;
  modal:boolean = false;
  valorFinanciarCop:any;

  min = this.env.min
  minF = this.env.minF

  contacto:ContactoInterface = {
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
      AutorizaConsultaCentrales: false,  
      AutorizaMareigua: false,  
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

  sendCentrales(this){
    this.centrales.authenticate(this.contacto);    
  }

  toNumber(val){
    let valArr=val.split('');
    let valFiltered = valArr.filter(x=> !isNaN(x))
    let valProcessed = valFiltered.join('')     
    return Number(valProcessed);
   }

   checkTyc(this){
    this.modal=false; 
    this.contacto.OtrosDatos.AutorizaConsultaCentrales=true;
    this.contacto.OtrosDatos.AutorizaMareigua=true;
   }
}

export interface DatosBasicos {
  
  Nombre1?: String; 
  TipoDocumento?: String;  
  NumeroDocumento?: String;  
  Celular?: String;  
  CorreoPersonal?: String;
}

export interface DatosFinancieros {
  
  ActividadEconomica?: Number;  
  ActividadIndependiente?: Number;  
  IngresoMensual?: Number;
  
}

export interface OtrosDatos {
  
  AutorizaConsultaCentrales?: Boolean;  
  AutorizaMareigua?: Boolean;  
  ValorFinanciar?: Number;
}

export interface ContactoInterface{

  DatosBasicos?:DatosBasicos;
  DatosFinancieros?:DatosFinancieros;
  OtrosDatos?:OtrosDatos;
}
