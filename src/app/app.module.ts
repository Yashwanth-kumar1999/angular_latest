import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BidderRegisterComponent } from './bidder-register/bidder-register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BidderWelcomeComponent } from './bidder-welcome/bidder-welcome.component';
import { FarmerWelcomeComponent } from './farmer-welcome/farmer-welcome.component';
import { FarmerSellrequestComponent } from './farmer-sellrequest/farmer-sellrequest.component';
import { FarmerSoldhistoryComponent } from './farmer-soldhistory/farmer-soldhistory.component';
import { MarketPlaceComponent } from './market-place/market-place.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegisterComponent,
    CustomerLoginComponent,
    DashboardComponent,
    BidderRegisterComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    BidderWelcomeComponent,
    FarmerWelcomeComponent,
    FarmerSellrequestComponent,
    FarmerSoldhistoryComponent,
    MarketPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
