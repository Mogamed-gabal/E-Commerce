import { CartService } from './../cart.service';
import { FormsModule } from '@angular/forms';
import { Component,OnInit } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
            
       
  cartProducts:any[]=[]
  all:any=this.cartProducts.values
  img:any=this.all.category;
  totalPrice:any=0
  num:any;
  arrayLength:any=0;
  constructor(private CartService:CartService,private Router:Router){

  }
  ngOnInit(): void {
    this.getCartProduct()
    this.getArrayLength()
  }

  getCartProduct(){
    if('soltprodects' in localStorage)
    {
      this.cartProducts= JSON.parse(localStorage.getItem("soltprodects")!)
      
  }
  this.getTotalPrice()
}

getTotalPrice()
{
  this.totalPrice=0
  for(let i in this.cartProducts)
  {
    this.totalPrice +=this.cartProducts[i].quantity * this.cartProducts[i].item.price
  }
  
}

subQuantity(index:number)
{
  this.cartProducts[index].quantity--
  localStorage.setItem('soltprodects',JSON.stringify(this.cartProducts));
  this.getTotalPrice()
}
addQuantity(index:number)
{
  this.cartProducts[index].quantity++
  this.getTotalPrice()
  localStorage.setItem('soltprodects',JSON.stringify(this.cartProducts));
  
}

detectChange()
{
  localStorage.setItem('soltprodects',JSON.stringify(this.cartProducts));

}
deletProduct(index:any)
{
  console.log(this.cartProducts[index])
  this.cartProducts.splice(index,1)
  this.getTotalPrice()
  this.getArrayLength()

  localStorage.setItem('soltprodects',JSON.stringify(this.cartProducts));
}
deletAllProducts()
{
  this.cartProducts=[];
  this.getTotalPrice()
  this.getArrayLength()

  localStorage.setItem('soltprodects',JSON.stringify(this.cartProducts));
  
}
getArrayLength()
{
  this.arrayLength=this.cartProducts.length
}

sendToDatabase()
{
let procuctsId=this.cartProducts.map(item=>
  {
    return {productId:item.item.id,quantity:item.quantity}
  })
  let Model={
    userId:5,
    date:new Date(),
    products:procuctsId
  }
  console.log(Model)
  this.CartService.sendCart(Model).subscribe((res=>
  {
    alert('successfull proccess')
    this.Router.navigate(['/home'])
    this.deletAllProducts()
    console.log('sucsseful process')
  }))
}
}
