import { NgModule, Optional, SkipSelf } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from "@angular/common/locales/en";
import {NZ_I18N, en_US } from "ng-zorro-antd/i18n";
import { throwIfAlreadyLoaded } from './module-import-guard';


registerLocaleData(en);


@NgModule({
  declarations: [],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule:CoreModule){
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
