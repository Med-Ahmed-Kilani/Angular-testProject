import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  
    constructor(private authService : AuthService, private router : Router){
      
    }

   
  
  ngOnInit() { }

  createAccount(email: string, password: string)
  {
    this.authService.createNewUser( email, password ).then(
      () => {
        console.log('Account created');
        alert('Account created');
        this.authService.isAuth=true;
        this.router.navigate(['newaccount']);
      },
      (error) => {
        console.log('Creation new account has failed'+error);
        alert('Creation new account has failed\n'+error);
      }
    );
  }
  

}
