import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { EditingInformationComponent } from './editing-information/editing-information.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { ReservationsPagesComponent } from './reservations-pages/reservations-pages.component';


@NgModule({
  declarations: [
    ProfileComponent,
    EditingInformationComponent,
    ChangePasswordComponent,
    PaymentsPageComponent,
    ReservationsPagesComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
