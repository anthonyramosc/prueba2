import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  
  [{
    "resource": "/C:/Users/USER/Documents/GitHub/uhge/src/main.ts",
    "owner": "typescript",
    "code": "2345",
    "severity": 8,
    "message": "Argument of type '{ providers: (typeof AppRoutingModule)[]; }' is not assignable to parameter of type '(CompilerOptions & BootstrapOptions) | (CompilerOptions & BootstrapOptions)[] | undefined'.\n  Types of property 'providers' are incompatible.\n    Type '(typeof AppRoutingModule)[]' is not assignable to type 'StaticProvider[]'.\n      Type 'typeof AppRoutingModule' is not assignable to type 'StaticProvider'.",
    "source": "ts",
    "startLineNumber": 11,
    "startColumn": 36,
    "endLineNumber": 11,
    "endColumn": 67
  }]