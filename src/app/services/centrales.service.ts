import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CentralesService {

  token:any;

  headers = new HttpHeaders ({
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': 'application/json, application/xml, text/plain, text/html, *.*' 
  })

  headerVi;
  optionsVi; 
  options = { headers: this.headers }


  constructor(private http: HttpClient) { }

  authenticate(contacto){

    const bodyT = {
      Username: environment.username,
      Password: environment.password
    }

    const body = new HttpParams({fromObject:bodyT}) 

    return this.http.post(`${environment.urlAt}`, body, this.options)
    .subscribe((resp:any) => {
           this.token = resp.Token

           this.headerVi = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
           }

           this.optionsVi = { headers: this.headerVi } 

           console.log("this.token", this.token);
           setTimeout(() => {
            this.response(contacto)  
           }, 3000);
                      
      })
  }

  response( contacto:any ){
      contacto = JSON.stringify(contacto)
      console.log("contacto --> ", contacto);
      console.log("this.optionsVi ---> ", this.optionsVi);
      
      return this.http.post(`${environment.urlVt}`, contacto, this.optionsVi)
      .subscribe((resp:any) => {
            console.log("resp -->", resp);          
        })    
  }

}
