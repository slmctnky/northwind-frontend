import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category1:any= {id:1,categoryName:"Elektronik"}
  category2:any= {id:2,categoryName:"Televizyon"}
  category3:any= {id:3,categoryName:"Mobilya"}
  category4:any= {id:4,categoryName:"Telefon"}

  categories : Category[]=[];

  currentCategory:Category;
  //={categoryId:0,categoryName:""} tsconfig içinde bunu eklemek lazım yoksa fake bir new yapılmalı
  // "strictPropertyInitialization": false,
  constructor(private categoryService:CategoryService ) { }
   ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data
      
    })
  }
  setCurrentCategory(category:Category){
    this.currentCategory=category;
  }
  
  getCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "list-group-item active"
    }
    else  {
      return "list-group-item"
    }
  }
  getAllCategoryClass(){
    if(!this.currentCategory||this.currentCategory.categoryId==0){
      return "list-group-item active"
    }
    else  {
      return "list-group-item"
    }
  }
  clearCurrentCategory(){
    this.currentCategory={categoryId:0,categoryName:""};
  }

}
