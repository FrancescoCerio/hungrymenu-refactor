import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishComponent } from './dish.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DishComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DishComponent]
})
export class DishModule { }
