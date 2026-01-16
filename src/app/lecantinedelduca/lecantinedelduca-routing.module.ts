import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecantinedelducaComponent } from './lecantinedelduca.component';

const routes: Routes = [
  {
    path: '',
    component: LecantinedelducaComponent
  },
  {
    path: 'ristorante',
    loadChildren: () => import('./ristorante/ristorante.module').then( m => m.RistoranteModule)
  },
  {
    path: 'gelateria',
    loadChildren: () => import('./gelateria/gelateria.module').then( m => m.GelateriaModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LecantinedelducaRoutingModule { }
