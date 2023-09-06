import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  preguntas = [
    {id: 1, Pregunta: '¿Cual es la estructura de el ciclo While en Java?' },
    {id: 2, Pregunta: '¿Qué es un recyclerview en kotlin?' },
    {id: 3, Pregunta: '¿A que hora salimos de clase?' }
  ]

  constructor(private api: ApiRestService){}
  
  ngOnInit():void{
    this.consulta()
  }

  consulta(){
    this.api.getAllPreguntas().subscribe({
     next: datos => {
       console.log(datos)
     },
     error: e =>{}
    })

   }
}
