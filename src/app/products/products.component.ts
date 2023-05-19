import { ProdectusService } from './../prodectus.service';
import { Component,OnInit } from '@angular/core';
import { getLocaleExtraDayPeriodRules, JsonPipe } from '@angular/common';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 allProducts:any[]=[];
 allCategories:string[]=[];
 loading:boolean=false;
 cartProduct:any[]=[];
 loaded:boolean=false;

  constructor(private services:ProdectusService,private wowService: NgwWowService)
  {
    
  }


  ngOnInit(): void {
   this.getProducts();
   this.getCategories();
   this.wowService.init();
   
  }
  getProducts()
  {
    this.loading=true;
    this.services.getAllProducts('products').subscribe((res:any)=>{
    this.allProducts=res
    
    this.loading=false},
    error=>{
      this.loading=false
      console.log(error)
    }
    
    
    )


  }
  getCategories()
  {
    this.loading=true;
    this.services.getAllProducts('products/categories').subscribe((res:any)=>{
    this.loaded=true
    this.allCategories=res
    this.loading=false;
  },
    error=>{
     
      this.loading=false
      console.log(error)
    }
    )
  }

  getCategory(key:string)
  {
    this.loading=true;

    this.services.getAllProducts(`products/category/${key}`).subscribe((res:any)=>{
    this.allProducts=res;
    this.loading=false;
  },
    error=>{
      this.loading=false
      console.log(error)
    }
    
    
    )


  }
  addToCart(event:any)
  {
    if('soltprodects' in localStorage)
    {
      this.cartProduct= JSON.parse(localStorage.getItem("soltprodects")!)
      let exist=this.cartProduct.find(product=>product.item.id==event.item.id)
      if(exist)
      {
        alert('product already exist in your cart')
      }
      else
      {
        this.cartProduct.push(event)
      localStorage.setItem('soltprodects',JSON.stringify(this.cartProduct))
      }
    }else
    {
      this.cartProduct.push(event)
      localStorage.setItem('soltprodects',JSON.stringify(this.cartProduct))
    }
    
    

}
}