import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'profile',
    pathMatch:'full'
  },
  {
    path:'change',
    loadChildren: () => import('./profile.module') .then((m) => m.ProfileModule)
  },
  {
    path:'editing',
    loadChildren: () => import('./profile.module') .then((m) => m.ProfileModule)
  },
  {
    path:'payments',
    loadChildren: () => import('./profile.module') .then((m) => m.ProfileModule)
  },
  {
    path:'reservations',
    loadChildren: () => import('./profile.module') .then((m) => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
