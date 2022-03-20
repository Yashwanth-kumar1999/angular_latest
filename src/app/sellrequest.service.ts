import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterStatus } from './register-status';
import { Sellrequest } from './sellrequest';

@Injectable({
  providedIn: 'root'
})
export class SellrequestService {
  private url="http://localhost:8181/sellRequest/{Fid}.api"

  constructor( private http:HttpClient) { }

  register(sellrequest:Sellrequest):Observable<object>{

    // console.log(JSON.stringify(sellrequest))

    return this.http.post(`${this.url}`,sellrequest)


  }
}
