import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email:string = ""
  password:string = ""
  showError = false
  showLoading = false
  constructor(private router: Router, private api: ApiRestService){}
  login(){
    this.showLoading = true
    this.api.login(this.email, this.password).subscribe({
      next: respuesta => {
        this.router.navigate(['/home'])
      },
      error: problemilla => {
        this.showError = true
        this.showLoading = false
      }
    })
  }
  
}
