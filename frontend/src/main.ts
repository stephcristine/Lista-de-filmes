import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
  ]
});
