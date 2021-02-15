import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/spinner/spinner.component';

// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgMaterialModule } from './infrastructure/ng-material-module/ng-material-module.module';
import { InterceptorServiceService } from './infrastructure/services/interceptor-service.service';
import { PageSearchComponent } from './components/page-search/page-search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    SpinnerComponent,
    PageSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgMaterialModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorServiceService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
