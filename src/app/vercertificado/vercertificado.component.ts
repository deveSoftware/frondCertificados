import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vercertificado',
  templateUrl: './vercertificado.component.html',
  styleUrls: ['./vercertificado.component.css']
})
export class VercertificadoComponent implements OnInit {
  Usuario:any=[]
  constructor() { }

  ngOnInit(): void {
    this.Usuario=JSON.parse(localStorage.getItem("usuarios"))
    console.log(this.Usuario)
  }

}
