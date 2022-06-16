import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { IonicModule } from '@ionic/angular';
import { DishModule } from '../dish/dish.module';
import { FlexModule } from '@angular/flex-layout';




@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule,
    IonicModule,
    DishModule,
    FlexModule
  ],
  exports: [SectionComponent],
  bootstrap: [SectionComponent]
})
export class SectionModule { }
