import { ModalLoaderComponent } from './../modal-loader/modal-loader.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private modal: NgbModal
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentModal = this.modal.open(ModalLoaderComponent, {
      animation: true,
      size: 'sm',
      backdrop: 'static',
      centered: true,
    });

    return next.handle(request).pipe(
      finalize(() => this.modal.dismissAll())
    );
  }
}
