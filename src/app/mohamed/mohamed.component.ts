import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
declare var $: any;
@Component({
  selector: 'app-mohamed',
  templateUrl: './mohamed.component.html',
  styleUrls: ['./mohamed.component.css']
})
export class MohamedComponent implements OnInit {
  name:any = 'Jquery Integration With Angular!';  
  isJqueryWorking: any;  
constructor(private wowService: NgwWowService)
{
}

ngOnInit(): void {
//  this.tt();
this.wowService.init();
 $(document).ready(() => {  
  this.isJqueryWorking = 'Jquery is working !!!';  
});  

}
// tt()
// {
//   setTimeout(() => {
//    let m=document.getElementById('m')
//    m?.classList.add('d-none')
//   }, 2000);
// }

}
