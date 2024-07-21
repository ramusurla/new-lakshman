import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { HeaderComponent } from './components/header/header.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NewComponent } from './components/new/new.component';
import { ContactComponent } from './components/contact/contact.component';
import { KycComponent } from './components/kyc/kyc.component';
import { OnlineComponent } from './components/online/online.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SearchDropdownComponent } from './components/search-dropdown/search-dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { MultipleFormArraysWithPreviewComponent } from './components/multiple-form-arrays-with-preview/multiple-form-arrays-with-preview.component';
import { MultiArrayComponent } from './components/multi-array/multi-array.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ViewproductsComponent,
    HeaderComponent,
    CartPageComponent,
    LoginComponent,
    SigninComponent,
    NotificationComponent,
    NewComponent,
    ContactComponent,
    KycComponent,
    OnlineComponent,
    SearchPipe,
    SearchDropdownComponent,
    FormArrayComponent,
    MultipleFormArraysWithPreviewComponent,
    MultiArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
