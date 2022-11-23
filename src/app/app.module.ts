import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainheadComponent } from './mainhead/mainhead.component';
import { MainlateralComponent } from './mainlateral/mainlateral.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainheadComponent,
    MainlateralComponent,
    MainbodyComponent,
    MainfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
