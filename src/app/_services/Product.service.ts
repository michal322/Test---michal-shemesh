import { Product } from './../_models/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, ReplaySubject } from 'rxjs';
import { ResponseList } from '../_models/ResponseList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl= 'https://raw.githubusercontent.com/GoogleChromeLabs/sample-pie-shop/master/src/data/products.json'

  listProducts$: Observable<Product[]> =new Observable<Product[]>();
  categoryList:Product[] = [] ;
  constructor(private http:HttpClient) {

  }

  getProducts(): Observable<ResponseList> {
    return this.http.get<ResponseList>(this.baseUrl);
  }

  AddProduct(product:Product){
    this.listProducts$.subscribe( res => {
      res.push(product)
    } );
  }

}
