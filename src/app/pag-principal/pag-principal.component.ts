import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Certificado } from '../Modelos/Modelo';
import {FormGroup, FormBuilder, Validators} from "@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.component.html',
  styleUrls: ['./pag-principal.component.css']
})
export class PagPrincipalComponent implements OnInit {
  Certificado: Certificado = {
    codigo: ""
  }
  User: any = []
  form_validar :FormGroup;
  constructor(private servicio: ServiciosService,private form:FormBuilder,private router:Router) { 
    this.form_validar =this.form.group({
      codigo:""
    })
  }

  ngOnInit(): void {
    
  }
  getCertificado() {
    this.servicio.obtenerdatos(this.Certificado).subscribe(
      res => {
        this.User = res
        localStorage.setItem("usuarios",JSON.stringify(this.User))
      },
      err => console.log(err)
    )
  }
}
