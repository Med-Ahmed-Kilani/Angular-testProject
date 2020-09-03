import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../connection/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  signOut()
  {
    this.authService.signOuntUser()
  }
}
