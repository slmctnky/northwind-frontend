import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import{ HttpClient } from '@angular/common/http'
import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // product:any={productId:1,productName:'Bardak',categoryId:1,unitsInStock:3,unitPrice:5}
  // product2:any={productId:2,productName:'Laptop',categoryId:1,unitPrice:5}
  // product3:any={productId:3,productName:'Mouse',categoryId:1,unitPrice:5}
  // product4:any={productId:4,productName:'Keyboard',categoryId:1,unitPrice:5}
  // product5:any={productId:5,productName:'Camera',categoryId:1,unitPrice:5}

  products:Product[]=[];

  apiUrl="https://localhost:44334/api/products/getall";
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=>{
      this.products=response.data
    });

  }

}
