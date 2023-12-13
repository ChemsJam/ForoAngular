import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiRestService } from '../api-rest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email:string = ""
  password = ""
  showError = false
  showLoading = false
  constructor(
  private router: Router, 
  private api: ApiRestService,  
  private msg: ToastrService
  ){}
  login(){
    this.showLoading = true
    this.api.login(this.email, this.password).subscribe({
      next: respuesta => {
        this.msg.success("Bienvenido")
        localStorage.setItem("correo", this.email);
        this.router.navigate(['/home']);
      },
      error: problemilla => {
        this.msg.error("Error")
        this.showError = true
        this.showLoading = false
      }
    })
  }
  
}
