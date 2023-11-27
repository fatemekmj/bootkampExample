import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductAppComponent } from './product-app/product-app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    component:ProductComponent,
    
    children:[
      {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
      },{
        path:'list',
        component:ProductListComponent
      },{
        path:'app',
        component:ProductAppComponent
      },{
        path:'detail',
        component:ProductDetailComponent
      }

    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
