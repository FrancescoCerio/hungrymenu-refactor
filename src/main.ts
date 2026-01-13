import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Initialize Vercel Analytics and Speed Insights
inject();
injectSpeedInsights();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
