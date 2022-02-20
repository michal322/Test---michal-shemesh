import { Product } from './../_models/Product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ResponseList } from '../_models/ResponseList';
import { ProductService } from '../_services/Product.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  ProductsList:Product[] = [] ;
  categoryList:Product[] = [] ;
  CategoriesName:string[]=[];
  Oneproduct: Product ;
  isOpen:boolean
  len = 12;
  constructor( private ProductService:ProductService ) { }

  ngOnInit(): void {
    this.resetProduct();
    this.GetAllProducts()
    this.isOpen= false;
    this.GetCategory();
  }
  ShowForm()
  {
    this.isOpen = !this.isOpen
  }
  GetAllProducts()
  {
    this.ProductService.getProducts().subscribe((p:ResponseList) => {
      this.ProductsList = p.products.data.items
      console.log(this.ProductsList)
    }, err => {
      console.log(err);
    })
  }

  AddProduct()
  {
    
    this.Oneproduct.id=this.stringGen();
    this.ProductService.AddProduct(this.Oneproduct)
  
  }
  stringGen() {
    var text = "";
    
    var charset = "ABCDEFGHIJKLMNOPQRSTWXYZ0123456789";
    
    for (var i = 0; i < this.len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    
    return text
  }
  
  resetProduct()
  {
    this.Oneproduct = {
      id:null,
      name: null,
      description: null,
      features: null,
      keywords: null,
      url: null,
      category: null,
      subcategory: null,
      price:null,
    }
  }

  
  GetCategory(){
    this.categoryList=this.groupBy(this.ProductsList,"category");
    this.CategoriesName = Object.keys(this.categoryList);
    console.log( this.CategoriesName );
  }
  
  groupBy (xs:any[], key:string) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {})}
}
