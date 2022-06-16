import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecantinedelducaComponent } from './lecantinedelduca.component';
import { LecantinedelducaRoutingModule } from './lecantinedelduca-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    LecantinedelducaComponent],
  imports: [
    IonicModule,
    LecantinedelducaRoutingModule
  ]
})
export class LecantinedelducaModule { }
