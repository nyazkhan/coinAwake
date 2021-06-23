import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.scss'],
})
export class NewDetailsComponent implements OnInit {
  @Input() newsDetails: object;
  newsDetail: any;
  constructor(
    navParams: NavParams,
    public modalCtrl: ModalController,
    private iab: InAppBrowser
  ) {

    this.newsDetail = navParams.get('newsDetails');

   }

  ngOnInit() {}
  goBack() {

    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });

  }
  openNews(val) {

    window.open(val, '_system'); return false;
  }

  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no',
      hideurlbar:'yes',
      closebuttoncaption:'close',
      closebuttoncolor:'#ffffff',
      toolbarcolor:'#1c52bb',
      fullscreen:'no',
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.iab.create(url, '_self', options);
    browser.insertCSS({ code: "body{font-size: 25px;}" });
    browser.show()

   // Inject scripts, css and more with browser.X
  }
}
