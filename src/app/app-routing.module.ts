import { MohamedComponent } from './mohamed/mohamed.component';
import { LoaderComponent } from './loader/loader.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home',},

  {path:'products',component:ProductsComponent,title:'products'},
  {path:'register',component:RegisterComponent,title:'register'},
  {path:'login',component:LoginComponent,title:'login'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'contact',component:ContactComponent,title:'contact'},
  {path:' ',component:ProductdetailsComponent},
  {path:'cartShopping',component:CartComponent},
  {path:'load',component:LoaderComponent},
  {path:'**',component:NotfoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
