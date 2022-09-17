import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header';
import { MenuLateralComponent } from './menu-lateral';





@NgModule({
  declarations: [
    HeaderComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    MenuLateralComponent
  ]
})
export class ComponentsModule { }
