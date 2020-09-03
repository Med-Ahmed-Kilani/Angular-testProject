import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  
  db: any;
  
  constructor( ){
    
  }

  options=[
    {pow :'pollution '},
    {pow :'Luminance'},
    {pow :'Water'},
    {pow :'Other'}
  ]

  addReclamation(nom: string, prenom:string, email:string, CIN:string, address: string, option:string, desc: string){
    firebase.database().ref('rec/'+ CIN).set({
      nom:nom,
      prenom:prenom,
      email:email,
      CIN:CIN,
      address: address,
      option: option,
      description: desc
    });
    alert('Reclamation sent with success');
  }


  ngOnInit() {
  }

}

