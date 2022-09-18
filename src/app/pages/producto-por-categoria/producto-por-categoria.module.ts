import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoPorCategoriaPageRoutingModule } from './producto-por-categoria-routing.module';

import { ProductoPorCategoriaPage } from './producto-por-categoria.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoPorCategoriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProductoPorCategoriaPage]
})
export class ProductoPorCategoriaPageModule {}
