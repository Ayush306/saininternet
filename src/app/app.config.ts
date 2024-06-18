import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, 
    withEnabledBlockingInitialNavigation(),
    withInMemoryScrolling({ scrollPositionRestoration: 'top' }
      
    )), provideClientHydration()]
};
