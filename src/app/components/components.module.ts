import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header';
import { MenuLateralComponent } from './menu-lateral';
import { ProductosComponent } from './productos/productos.component';





@NgModule({
  declarations: [
    HeaderComponent,
    MenuLateralComponent,
    ProductosComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    MenuLateralComponent,
    ProductosComponent,
  ]
})
export class ComponentsModule { }
