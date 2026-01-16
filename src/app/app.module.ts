import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  map, call, menu, menuOutline, menuSharp, close, closeOutline, closeSharp,
  restaurant, restaurantOutline, chevronDownOutline, phonePortraitOutline,
  flashOutline, leafOutline, arrowForwardOutline
} from 'ionicons/icons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SectionModule } from './section/section.module';

// Register icons globally for Ionic 8 + Vite
addIcons({
  map, call, menu, menuOutline, menuSharp, close, closeOutline, closeSharp,
  restaurant, restaurantOutline, chevronDownOutline, phonePortraitOutline,
  flashOutline, leafOutline, arrowForwardOutline
});


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SectionModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
