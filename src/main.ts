import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// ✅ Import Capacitor core
import { Capacitor } from '@capacitor/core';

console.log('Running on Capacitor platform:', Capacitor.getPlatform());

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
