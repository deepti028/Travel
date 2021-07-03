import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// import { HttpModule } from '@angular/common/http';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
// import { CountdownTimerModule } from 'ngx-countdown-timer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { PanelComponent } from './panel/panel.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MenuModule } from 'primeng/menu';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TravelService } from './travel.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PanelMenuModule,
    MenuModule,
    ButtonModule,
    PanelModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // CountdownTimerModule.forRoot()
    // HttpClient

  ],
  providers: [TravelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
