import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../src/app/AppComponent/app';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent, config, context);

export default bootstrap;
