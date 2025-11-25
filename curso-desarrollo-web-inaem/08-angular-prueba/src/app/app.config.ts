import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
/*import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core'*/

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(), // Se necesita agregar/poner, si es que queremos que nos funcione el 'private http: HttpClient' del 📄"informes.ts" por medio de la tabla inyección de dependecias.
    // { provide: LOCALE_ID, useValue: 'es'}
  ]
};
