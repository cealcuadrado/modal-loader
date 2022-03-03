import { ModalLoaderComponent } from './../modal-loader/modal-loader.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private modal: NgbModal,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(users => {
      console.log(users);
    });
  }
}
