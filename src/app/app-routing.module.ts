import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './auth.guard';
import { NotificationComponent } from './components/notification/notification.component';
import { NewComponent } from './components/new/new.component';
import { SearchDropdownComponent } from './components/search-dropdown/search-dropdown.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { MultipleFormArraysWithPreviewComponent } from './components/multiple-form-arrays-with-preview/multiple-form-arrays-with-preview.component';
import { MultiArrayComponent } from './components/multi-array/multi-array.component';

const routes: Routes = [
  // {path:'login',component:LoginComponent},
  // {path:'sign',component:SigninComponent},
  // {path:'',component:ProductsComponent},
  // {path:'viewproducts/:id',component:ViewproductsComponent},
  // {path:'cart-page',component:CartPageComponent},
  {path:'',component:FormArrayComponent},
  {path:'multi',component:MultiArrayComponent},
  {path:'search',component:SearchDropdownComponent},
{path:'multi-form-array',component:MultipleFormArraysWithPreviewComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
