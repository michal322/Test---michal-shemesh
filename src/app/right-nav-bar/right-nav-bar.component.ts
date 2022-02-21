import { Product } from './../_models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/Product.service';
import { ResponseList } from '../_models/ResponseList';

export interface CatAndAvg{
  categoryName:string;
  avg:number;
  count:number;
}

@Component({
  selector: 'app-right-nav-bar',
  templateUrl: './right-nav-bar.component.html',
  styleUrls: ['./right-nav-bar.component.css']
})
export class RightNavBarComponent implements OnInit {
 categoryList:Product[] = [] ;
 ProductList:Product[] = [] ;
 CategoriesName:string[]=[];
 listOfCatAndAvg:CatAndAvg[]=[];


  constructor( private produSer:ProductService ) { }

  ngOnInit(): void {
    this.produSer.getProducts().subscribe((p:ResponseList) => {
      this.ProductList = p.products.data.items;
      console.log(this.ProductList);
      this.GetCategory();
    },err =>{
      console.log(err); 
    }) 
  }

  //GetCategory
  GetCategory(){
    this.categoryList=this.groupBy(this.ProductList,"category");

    let sum=0;
    let avg=0;;
    let count=0;

    this.CategoriesName = Object.keys(this.categoryList);
    console.log( this.CategoriesName)
    this.CategoriesName.forEach(element => {
      count=0;
      const obj = this.categoryList[element];
      obj.forEach(element2 => {
        sum+=parseInt(element2.price);
         count++;  
      });
      avg=Number(Number(sum)/count) 
      let catandAvg ={avg :avg,categoryName:element,count:count} as CatAndAvg
      this.listOfCatAndAvg.push(catandAvg);
      sum=0
    });
      this.listOfCatAndAvg = this.listOfCatAndAvg.sort(function (x, y) {
          return x.avg - y.avg;
      }) 
  }
  
  //groupBy
  groupBy (xs:any[], key:string) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {})}
    
}
