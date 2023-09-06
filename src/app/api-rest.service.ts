import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  urlLogin = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlMdNslRoMVRku-eqfW7xbtvBNjvufTG8";
  urlRegister = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlMdNslRoMVRku-eqfW7xbtvBNjvufTG8";
  url = "https://firestore.googleapis.com/v1/projects/my-first-project-3f9e9/databases/(default)/documents/"
  constructor(private http: HttpClient) { }
  login(email: string, pass: string){

  return this.http.post(this.urlLogin,({"email":email,"password":pass,"returnSecureToken":true}));
  }

  register(email: string, pass: string){

    return this.http.post(this.urlRegister,({"email":email,"password":pass,"returnSecureToken":true}));
    }

    getAllPreguntas(){
      return this.http.get(this.url+"preguntas")
    }

    createPregunta(categoria:string, correo:string, desc:string, fecha:string, id:string){
      return this.http.post(this.url+"respuestas", {})
    }

    updatePregunta(categoria:string, correo:string, desc:string, fecha:string, id:string){
      return this.http.patch(this.url+"respuestas/"+id, {})
    }

    deletePregunta(id:string){
      return this.http.delete(this.url+'preguntas/'+id)
    }


    
    getAllRespuestas(categoria:string, correo:string, desc:string, fecha:string){
      return this.http.post(this.url+"respuestas", {})
    }
  }


  