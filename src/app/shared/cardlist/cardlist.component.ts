import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent implements OnInit {
  @Input() list: any;

  @Output() refresh = new EventEmitter<any>();

  constructor(  private admobFree: AdMobFree) { }

  ngOnInit() { }
  doRefresh(event) {
    console.log(event);
    // this.reqObj.pageNo = 1;
    this.refresh.emit({ type: 'refresh', event: event });
    // this.userService.getCryptoNews(this.reqObj).subscribe((res) => {
    //   this.article = []
    //   this.article = res.data.data
    // event.target.complete();

    // })
    this.showBannerAd()
  }

  loadData(event) {
    this.showInterstitialAds()
    this.refresh.emit({ type: 'load', event: event });

  }

  showBannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
        isTesting: true, // Remove in production
        autoShow: true,
        id: "ca-app-pub-8625656522236573/5163344842"
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {
        // success
    }).catch(e => alert(e));
}


showInterstitialAds(){
  let interstitialConfig: AdMobFreeInterstitialConfig = {
      isTesting: true, // Remove in production
      autoShow: true,
      id: "ca-app-pub-8625656522236573/1275236572"
  };
  this.admobFree.interstitial.config(interstitialConfig);
  this.admobFree.interstitial.prepare().then(() => {
  }).catch(e => alert(e));
}

showRewardVideoAds(){
  let RewardVideoConfig: AdMobFreeRewardVideoConfig = {
      isTesting: true, // Remove in production
      autoShow: true//,
      //id: "ca-app-pub-3940256099942544/6300978111"
  };
  this.admobFree.rewardVideo.config(RewardVideoConfig);
  this.admobFree.rewardVideo.prepare().then(() => {
  }).catch(e => alert(e));
}
}
