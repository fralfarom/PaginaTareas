import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app.routing.module';

import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableBasicExampleComponent } from './components/table-basic-example/table-basic-example.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { MaterialModule } from './material.module';
import { ModificarComponent } from './components/modificar/modificar.component';
import { InterceptorService } from './interceptors/interceptor.service';

@NgModule({
  entryComponents:[
    AgregarComponent,
    ModificarComponent
  ],
  declarations: [
    AppComponent,
    TableBasicExampleComponent,
    HomeComponent,
    AgregarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
