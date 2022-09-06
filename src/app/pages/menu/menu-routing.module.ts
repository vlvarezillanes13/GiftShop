import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      // {
      //   path: 'inicio',
      //   loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      // },
      {
        path: '**',
        redirectTo: 'home',
      },
      {
        path: 'menu',
        loadChildren: () => import('..//menu/menu.module').then( m => m.MenuPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
