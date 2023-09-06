import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email:string = ""
  password:string = ""
  showError = false
  showLoading = false
  constructor(private router: Router, private api: ApiRestService){}
  register(){
    this.showLoading = true
    this.api.register(this.email, this.password).subscribe({
      next: respuesta => {
        this.router.navigate(['/login'])
      },
      error: problemilla => {
        this.showError = true
        this.showLoading = false
      }
    })
  }
  
}

