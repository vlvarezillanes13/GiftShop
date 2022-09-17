import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { IonicModule } from '@ionic/angular';
import { InicioPage } from './inicio.page';
import { ComponentsModule } from 'src/app/components';


@NgModule({
  declarations: [
    InicioPage
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    IonicModule,
    ComponentsModule,
  ]
})
export class InicioModule { }
