import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { IonicModule } from '@ionic/angular';
import { DishModule } from '../dish/dish.module';




@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule,
    IonicModule,
    DishModule
  ],
  exports: [SectionComponent],
  bootstrap: [SectionComponent]
})
export class SectionModule { }
