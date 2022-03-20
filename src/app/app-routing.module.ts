import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BidderRegisterComponent } from './bidder-register/bidder-register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FarmerSellrequestComponent } from './farmer-sellrequest/farmer-sellrequest.component';

const routes: Routes = [
  { path: 'register/farmer', component: CustomerRegisterComponent},
  {path: 'register/bidder', component:BidderRegisterComponent},
  {path: 'login', component:CustomerLoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'',component:HomeComponent},
  {path:'about' ,component:AboutComponent},
  {path:'contact',component:ContactUsComponent},
  {component: FarmerSellrequestComponent, path:'sellrequest'}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
