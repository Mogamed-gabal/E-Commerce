import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdectusService {

  constructor(private http:HttpClient) { }

  getAllProducts(type:string):Observable<any>
  {
    return this.http.get(`https://fakestoreapi.com/${type}`)
  }
  getSingleProduct(id:any):Observable<any>
  {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
  
}
