import { NgwWowModule } from 'ngx-wow'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { DescriptionPipe } from './description.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { MohamedComponent } from './mohamed/mohamed.component';
import { HeaderPipe } from './header.pipe';
import { NgParticlesModule } from "ng-particles";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    ProductsComponent,
    ProductdetailsComponent,
    CartComponent,
    DescriptionPipe,
    LoaderComponent,
    ProductComponent,
    MohamedComponent,
    HeaderPipe,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    
    NgParticlesModule ,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ɵInternalFormsSharedModule,
    NgwWowModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
