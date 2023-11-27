import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from'./app-routing.module';
import {DashbordComponent} from './pages/dashbord/dashbord.component';
import { HeaderComponent } from './core/Layout/header/header.component';
import { FooterComponent } from './core/Layout/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    
}

