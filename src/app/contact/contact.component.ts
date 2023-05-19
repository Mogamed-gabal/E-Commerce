import { Component,OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contantForm:FormGroup=new FormGroup({

 fullName:new FormControl('',[Validators.required]),
 email:new FormControl('',[Validators.required,Validators.email]),
 explain:new FormControl('')
  })
  constructor(private Router:Router){}

  sendData()
  {
    localStorage.setItem('contatcUs',JSON.stringify(this.contantForm.value))
    alert('Thank You for your explain,please engoy shopping in ourPage')
    this.Router.navigate(['/home'])
  }

  ngOnInit(): void {
    
  }
}
