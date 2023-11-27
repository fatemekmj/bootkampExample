import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'tariffs',
    pathMatch:'full'
  },
  {
    path:'add-new-tariffs',
    loadChildren:() => import('./tariffs.module') .then ((m) => m.TariffsModule)
  },
  {
    path:'detailed-list-of-tariffs',
    loadChildren:() => import('./tariffs.module') .then ((m) => m.TariffsModule)
  },
  {
    path:'list-of-tariffs',
    loadChildren:() => import('./tariffs.module') .then ((m) => m.TariffsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TariffsRoutingModule { }
