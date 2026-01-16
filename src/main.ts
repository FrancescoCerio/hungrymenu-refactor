import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { addIcons } from 'ionicons';
import {
  map, call, menu, menuOutline, menuSharp, close, closeOutline, closeSharp,
  restaurant, restaurantOutline, chevronDownOutline, phonePortraitOutline,
  flashOutline, leafOutline, arrowForwardOutline
} from 'ionicons/icons';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { routes } from './app/app.routes';

// Register icons globally
addIcons({
  map, call, menu, menuOutline, menuSharp, close, closeOutline, closeSharp,
  restaurant, restaurantOutline, chevronDownOutline, phonePortraitOutline,
  flashOutline, leafOutline, arrowForwardOutline
});

if (environment.production) {
  enableProdMode();
}

// Initialize Vercel Analytics and Speed Insights
inject();
injectSpeedInsights();

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules))
  ]
}).catch(err => console.log(err));
