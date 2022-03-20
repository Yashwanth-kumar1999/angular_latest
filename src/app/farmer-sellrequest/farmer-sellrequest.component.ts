import { Component, OnInit } from '@angular/core';
import { Sellrequest } from '../sellrequest';
import { SellrequestService } from '../sellrequest.service';

@Component({
  selector: 'app-farmer-sellrequest',
  templateUrl: './farmer-sellrequest.component.html',
  styleUrls: ['./farmer-sellrequest.component.css']
})
export class FarmerSellrequestComponent implements OnInit {
  sellrequest:Sellrequest=new Sellrequest();
  constructor() { }

  ngOnInit(): void {
  }
  processRegistration(){
  

  }

}
