import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor()
  {}
 @Input() data:any={}
 @Output() item=new EventEmitter;
 elemet:{}={};
 addButton:boolean=false
amount:number=0
id:number=0
 


 ngOnInit(): void {
   
 }
 add()
 {
  this.item.emit({item:this.data,quantity:this.amount})
 }

 deatil()
 {
  this.data,
  console.log(this.data)
 }
}
