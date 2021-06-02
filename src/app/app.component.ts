import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
   
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      // // this.statusBar.overlaysWebView(true);

      // // set status bar to white
      // this.statusBar.backgroundColorByHexString('#FFD369');
    });
  }
 }
