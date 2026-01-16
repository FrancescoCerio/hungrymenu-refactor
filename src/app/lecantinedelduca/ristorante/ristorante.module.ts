import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RistoranteComponent } from './ristorante.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SectionModule } from 'src/app/section/section.module';

const routes: Routes = [
  {
    path: '',
    component: RistoranteComponent
  }
];

@NgModule({
  declarations: [RistoranteComponent],
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    CommonModule,
    SectionModule,

  ],

})
export class RistoranteModule { }
