import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MahasiswaComponent } from './pages/mahasiswa/mahasiswa.component';
import { Pratikum3Component } from './pages/pratikum3/pratikum3.component';

@NgModule({
  declarations: [
    AppComponent,
    MahasiswaComponent,
    Pratikum3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
