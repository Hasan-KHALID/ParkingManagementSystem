import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import  {FormsModule} from'@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VehicleInformationComponent } from './vehicle-information/vehicle-information.component';
import { VechileListComponent } from './vechile-list/vechile-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    VehicleInformationComponent,
    VechileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
