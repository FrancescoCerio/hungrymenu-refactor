import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GelateriaComponent } from './gelateria.component';


const routes: Routes = [
  {
    path: '',
    component: GelateriaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class GelateriaModule { }
