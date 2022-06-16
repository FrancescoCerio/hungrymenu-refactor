import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: FooterComponent
  }
];

@NgModule({
  declarations: [FooterComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IonicModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
