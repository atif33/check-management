import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {LoginComponent} from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CheckComponent} from './check/check.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PdfPrintComponent} from './pdf-print/pdf-print.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {HttpClientModule} from '@angular/common/http';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ToastrModule} from 'ngx-toastr';
import {AgmCoreModule} from '@agm/core';
import {ConvertDeviceComponent} from './convert-device/convert-device.component';
import { CalculatorComponent } from './calcultor/calculator.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CheckComponent,
    PdfPrintComponent,
    ContactUsComponent,
    ConvertDeviceComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: ''
    }),
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
