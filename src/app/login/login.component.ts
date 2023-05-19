import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private Router:Router){}
  isLoading:Boolean=false
  err:Boolean=false
  errMessage:any
  token:any
  loginForm:FormGroup=new FormGroup({
    phone:new FormControl(null,[Validators.required,Validators.pattern('^012[0-9]{8}$')]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{5,}$')])
  })
  sendData(loginForm:FormGroup)
  {
   this.Router.navigate(['/cart'])
   alert('complete your Proccess')
  }
  ngOnInit(): void {
    
  }
}
