import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [BrowserModule,HttpClientModule,  IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy } , AdMobFree, InAppBrowser ],
  bootstrap: [AppComponent],
})
export class AppModule {}
