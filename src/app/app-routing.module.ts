import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashbordComponent } from './pages/dashbord/dashbord.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  //داشبورد فقط یه کامپوننته اینجور مینویسیم اینجا
  {
    path:'Dashbord',
    component:DashbordComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule),
  },
  {
    path:'profile',
    loadChildren: () => import('./profile/profile.module') .then ((m) => m.ProfileModule)
  },
  {
    path:'tariffs',
    loadChildren: () => import('./tariffs/tariffs.module') .then((m) => m.TariffsModule)
  },
  {
    path: '**',
    redirectTo: 'error/404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
