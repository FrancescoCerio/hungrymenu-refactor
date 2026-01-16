import { NgModule } from '@angular/core';
import { LecantinedelducaComponent } from './lecantinedelduca.component';
import { LecantinedelducaRoutingModule } from './lecantinedelduca-routing.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [LecantinedelducaComponent],
  imports: [
    IonicModule,
    LecantinedelducaRoutingModule
  ]
})
export class LecantinedelducaModule { }
