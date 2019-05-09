import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module'; // 引入AppModule来引导该应用,它是在src/app.modules.ts中指定的

/* 
  AppModule指定了将那个组件作为顶层组件,这里是AppComponent
*/
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
