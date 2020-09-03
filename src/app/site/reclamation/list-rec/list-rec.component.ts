import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/site/connection/auth.service';
import { Listrec } from './listrec.model';


@Component({
  selector: 'app-list-rec',
  templateUrl: './list-rec.component.html',
  styleUrls: ['./list-rec.component.css']
})
export class ListRecComponent implements OnInit {

  listrecs: Listrec[];

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
    this.AuthService.getlistrec().subscribe(data => (
      this.listrecs = data.map(e => {
        return {
          nom: e.payload.doc.data(),
          prenom: e.payload.doc.data(),
          email: e.payload.doc.data(),
          CIN: e.payload.doc.data(),
          address: e.payload.doc.data(),
          option: e.payload.doc.data(),
          description: e.payload.doc.data()
        } as Listrec;
      })
    ));
  }

}
