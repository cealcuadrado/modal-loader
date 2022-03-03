import { ModalLoaderComponent } from './../modal-loader/modal-loader.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {

  }

  openModal(): void {
    this.modal.open(ModalLoaderComponent, {
      animation: true,
      size: 'sm',
      backdrop: 'static',
      centered: true
    })
  }

}
