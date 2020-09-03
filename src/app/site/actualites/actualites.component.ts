import { Component, OnInit } from '@angular/core';
import { ActualitesService } from './actualites.service';


@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {

  actualitee:any[];
  constructor (private service:ActualitesService) {
    this.actualitee=service.getact();
  }
   
  ngOnInit() {
    
  }

}
