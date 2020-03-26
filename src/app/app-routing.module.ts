import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCompComponent } from './homeComp/homeComp.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ManagerProductComponent } from './manager-product/manager-product.component';



const routes: Routes = [
 {path:'home',component:HomeCompComponent},
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'shopNow',component:ProductListComponent},
  {path:'product/detail/:id',component:ProductDetailComponent},
  {path:"product/edit/:id",component:ManagerProductComponent},
  {path :'managerProduct',component:ManagerProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
