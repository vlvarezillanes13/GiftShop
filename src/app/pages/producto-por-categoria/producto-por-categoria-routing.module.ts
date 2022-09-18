import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoPorCategoriaPage } from './producto-por-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoPorCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoPorCategoriaPageRoutingModule {}
