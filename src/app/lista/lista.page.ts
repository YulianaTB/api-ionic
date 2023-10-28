import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  data: any[] = [];
  //aliadosMostrar = [] //variable que cree para guardar el objeto de aliados

  constructor(
    //private http:HttpClient
    private apiServices: ApiService
    ) {}

  ngOnInit() :void {
   // this.http.get<any>('http://127.0.0.1:8000/api/aliados')  //res es el objeto que tiene todo la info de aliados
   // .subscribe(res=> {
   //   console.log(res);
   //   this.aliadosMostrar = res.results; //aqui paso los datos del objeto a aliadosMostrar
   // })
    this.llenarData();
  }

  llenarData(){
    this.apiServices.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

}

