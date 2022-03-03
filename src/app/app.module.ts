import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalLoaderComponent } from './modal-loader/modal-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ModalLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
