import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Certificado } from '../Modelos/Modelo';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) {
    
   }

   heroku="https://certificado-nodejs.herokuapp.com/"
   url="api/datos_certificado/searchCertifi"
   
   obtenerdatos(codigo:Certificado){
     return this.http.post(this.heroku+this.url,codigo);
   }
}
