import { Component, OnInit } from '@angular/core';

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

  categories=[this.category1, this.category2, this.category3,this.category4];
  constructor() { }

  ngOnInit(): void {
  }

}
