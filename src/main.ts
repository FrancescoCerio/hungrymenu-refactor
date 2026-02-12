import { enableProdMode } from '@angular/core';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowser } from '@angular/platform-browser'

if (environment.production) {
  enableProdMode();
}

// Initialize Vercel Analytics and Speed Insights
inject();
injectSpeedInsights();

platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.log(err));
