import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  seConnecter(email:string,password:string)
  {
    this.authService.signInUser(email,password).then(
      () => {
        alert('Welcome '+email);
        this.router.navigate(['/listrec']);
      },
      (error) => {
        console.log('Connection Problem '+error);
        alert('Account inaccessible');
      }
    );
  }
}
