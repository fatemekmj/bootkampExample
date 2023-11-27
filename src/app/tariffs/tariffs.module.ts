import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TariffsRoutingModule } from './tariffs-routing.module';
import { TariffsComponent } from './tariffs.component';
import { ListOfTariffsComponent } from './list-of-tariffs/list-of-tariffs.component';
import { DetailedListOfTariffsComponent } from './detailed-list-of-tariffs/detailed-list-of-tariffs.component';
// import { AddNewTariffComponent } from './add-new-tariff/add-new-tariff.component';
import { AddNewTariffsComponent } from './add-new-tariffs/add-new-tariffs.component';


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    TariffsRoutingModule
  ]
})
export class TariffsModule { }
