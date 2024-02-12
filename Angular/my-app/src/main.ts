import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

/* 
  & create module base angular workspace on Angular 17;
  $ ng new my-app --no-standalone
*/
