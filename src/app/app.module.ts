import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { StartupService } from './core/startup/startup.service';
import { CoreModule } from './core/core.module';

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}
// 初始化服务
const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true,
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // IconsProviderModule,
    // NzLayoutModule,
    // NzMenuModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [...APPINIT_PROVIDES],
  bootstrap: [AppComponent]
})
export class AppModule { }
