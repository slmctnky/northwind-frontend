import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44334/api";
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ListResponseModel<Product>>{
  
    let newPath=this.apiUrl+"/products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);

  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    console.log(categoryId)
    let newPath=this.apiUrl+"/products/getbycategory?categoryId="+categoryId;
    console.log(newPath)
    return this.httpClient.get<ListResponseModel<Product>>(newPath);

  }
}
