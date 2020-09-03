import { Component, OnInit } from '@angular/core';
import { ActualitesService } from '../actualites.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  titre: string;  
  desc: string;
  img: string;

  constructor( private route: ActivatedRoute, private service: ActualitesService ) { 
   }

  ngOnInit() {
    const idd = this.route.snapshot.params.id;
    this.titre= this.service.getactualited(idd).titre;
    this.desc= this.service.getactualited(idd).description;
    this.img= this.service.getactualited(idd).photo;
  }

}



