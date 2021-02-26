import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ScanparamsService } from './scan-params.service';

@Injectable({
  providedIn: 'root'
})

export class CentralesService {

  token:any;
  env = environment;

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
      ValorFinanciar: null,
      ConcesionarioRadicacion: null,
      IdentificacionVendedor: null,
      InfoUno: null   
    },

    DatosVehiculo: {
      Marca: 17
    }
  }

  headers = new HttpHeaders ({
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': 'application/json, application/xml, text/plain, text/html, *.*' 
  })

  headerVi;
  optionsVi; 
  options = { headers: this.headers }


  constructor(private http: HttpClient, private scanParams: ScanparamsService) { }

  authenticate(){

    this.contacto.OtrosDatos.ConcesionarioRadicacion = this.scanParams.idc;
    this.contacto.OtrosDatos.IdentificacionVendedor = this.scanParams.idv;
    this.contacto.OtrosDatos.InfoUno = this.scanParams.utm;

    const bodyT = {
      UserPass: this.env.userpass
    }

    const body = new HttpParams({fromObject:bodyT}) 

    return this.http.post(`${this.env.urlAp}`, body, this.options)
    .subscribe((resp:any) => {
           this.token = resp.Token

           this.headerVi = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
           }

           this.optionsVi = { headers: this.headerVi }      
                      
      })
  }

  response( contacto:any ){
      contacto = JSON.stringify(contacto)      
      return this.http.post(`${this.env.urlVp}`, contacto, this.optionsVi)         
  }

}

export interface DatosBasicos {
  
  Nombre1?: String; 
  TipoDocumento?: number;  
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
  IdentificacionVendedor?: Number;
  ConcesionarioRadicacion?: number;
  InfoUno: string;
}

export interface DatosVehiculo {
  
  Marca: number;
}

export interface ContactoInterface{

  DatosBasicos?:DatosBasicos;
  DatosFinancieros?:DatosFinancieros;
  OtrosDatos?:OtrosDatos;
  DatosVehiculo:DatosVehiculo;
}
