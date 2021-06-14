import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

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
}
