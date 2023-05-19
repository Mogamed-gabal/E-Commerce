import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdectusService } from './../prodectus.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productId:string='';
  productDetailsa:any;
constructor(private services:ProdectusService, private _ActivatedRoute:ActivatedRoute){
 
}



ngOnInit(): void {
  this.productId= this._ActivatedRoute.snapshot.params['id'];
this.services.getSingleProduct(this.productId).subscribe({
  next:(res)=>this.productDetailsa=res
})
}



}