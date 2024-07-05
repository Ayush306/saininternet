import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, 
    withEnabledBlockingInitialNavigation(),
    withInMemoryScrolling({ scrollPositionRestoration: 'top' }))
    ,provideClientHydration(),
     {provide: LocationStrategy, useClass: HashLocationStrategy} ]
};
