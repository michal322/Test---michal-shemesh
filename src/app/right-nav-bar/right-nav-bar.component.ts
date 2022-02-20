import { Product } from './../_models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/Product.service';
import { ResponseList } from '../_models/ResponseList';

@Component({
  selector: 'app-right-nav-bar',
  templateUrl: './right-nav-bar.component.html',
  styleUrls: ['./right-nav-bar.component.css']
})
export class RightNavBarComponent implements OnInit {
 categoryList:Product[] = [] ;
 ProductList:Product[] = [] ;
 CategoriesName:string[]=[];
  SortProductByPrice:Product[] = [] ;

  SortProduct:string[]=[];
  constructor( private produSer:ProductService ) { }

  ngOnInit(): void {
    this.produSer.getProducts().subscribe((p:ResponseList) => {
      this.ProductList = p.products.data.items;
      console.log(this.ProductList);
      this.GetCategory();
      // this.b();
    },err =>{
      console.log(err); 
    }) 
  }

  GetCategory(){
    this.categoryList=this.groupBy(this.ProductList,"category");
    console.log( this.categoryList)
    this.CategoriesName = Object.keys(this.categoryList);
    console.log(this.CategoriesName);
  }

  groupBy (xs:any[], key:string) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {})}
  // b(){
  //   this.SortProductByPrice=this.groupBy(this.ProductList,"category");
  //   this.SortProduct =this.groupBy(this.SortProductByPrice,"price");
 
  //   this.SortProduct = Object.keys(this.SortProductByPrice);
  //   console.log(this.SortProduct);
  // }
}
