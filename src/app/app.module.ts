import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { allAppRoutes } from './routes';
import { WeatherComponent } from './weather/weather.component';
import { ApiService } from './api.service';
import { ConvertorComponent } from './convertor/convertor.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ConvertorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
