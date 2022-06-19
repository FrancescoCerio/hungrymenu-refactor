import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RistoranteComponent } from './ristorante.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SectionModule } from 'src/app/section/section.module';
import { FlexModule } from '@angular/flex-layout';



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
    FlexModule,
    SectionModule,

  ],

})
export class RistoranteModule { }
