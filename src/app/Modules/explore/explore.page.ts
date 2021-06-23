import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, IonSlides, ModalController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';
export const NEWS = {
  "id": 1288,
  "newsUrl": "https://cryptodaily.co.uk/2021/05/belt-finance-flash-loanattack-bsc",
  "imageUrl": "https://crypto.snapi.dev/images/v1/z/2/binanceinvestigation-29413.png",
  "title": "BSC's Belt Finance Loses $6.2 Million In Flash Loan Attack",
  "text": "Belt Finance, an AMM protocol incorporating multi-strategy converted to 2680 anyETH, and partially withdrawn to Ethereum through 1inch V3.",
  "sourceName": "Crypto Daily",
  "date": "2021-05-29T23:35:00.000+00:00",
  "topics": null,
  "sentiment": "Negative",
  "type": "Article",
  "createdDate": "2021-05-30T09:30:02.000+00:00",
  "modifiedDate": null,
  "isActive": true,
  "coinMaster": [
    {
      "id": 26,
      "code": "ada",
      "name": "ADA",
      "isActive": true
    },
    {
      "id": 4,
      "code": "eth",
      "name": "ETH",
      "isActive": true
    }
  ]
}
@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  titles: any = [
    {
      data: [],
      key: 'News',
      value: 'Article',
    },
    {
      data: [],
      key: 'Videos',
      value: 'Video'
    },
    {
      data: [],
      key: 'Analysis',
      value: 'tanalysis'
    },
    {
      data: [],
      key: 'Mining',
      value: 'mining'
    },
    {
      data: [],
      key: 'Institution',
      value: 'institutions'
    },
    {
      data: [],
      key: 'Regulation',
      value: 'regulations'
    },
    {
      data: [],
      key: 'NFT',
      value: 'NFT'
    },

  ]
  reqObj = {
    "sourceName": [],
    "sentimate": [],
    "topicName": [],
    "coinId": [],
    "pageNo": 1,
    "totalRecord": 10,
    "typeName": []
  }
  Article: any;
  Video: any;
  Analysis: any;
  Mining: any;
  Institution: any;
  Regulation: any;
  NFT: any;
  selectedTitle: {
    data: any,
    key: string,
    value: string
  } = {
      data: [],
      key: 'News',
      value: 'Article'
    };

  article = []


  categoryFilter = 'News';

  items: any = [];

  currentPageNo = 1;
  totalItems: number;
  count = 10;
  constructor(
    private router: Router,
    public modalController: ModalController,
    private userService: UserService,
    @Inject(DOCUMENT) document

  ) {
    this.getNewsData(this.makeRequestObject());

    this.userService.getCoinMaster().subscribe((res) => {

    })
  }

  ngOnInit() {
  }
  filterby(val) {
    this.selectedTitle = val // this.titles.filter((ele) => ele.value == val); ;
    this.titles.findIndex((ele) => ele.key == val.key)
    this.slides.slideTo(this.titles.findIndex((ele) => ele == val), 10)
    this.getNewsData(this.makeRequestObject());
  }


  getNewsData(obj) {

    this.userService.getCryptoNews(obj).subscribe((res) => {
      this.article = res.data.data

      

    })
  }


  slideChanged(e: any) {
    this.slides.getActiveIndex().then((index: number) => {
      this.selectedTitle = this.titles[index];
      this.reqObj.pageNo = 1;
      this.article = []
      this.getNewsData(this.makeRequestObject());
    });
  }
  doRefresh(event) {
    console.log(event);
    this.reqObj.pageNo = 1;

    this.userService.getCryptoNews(this.makeRequestObject()).subscribe((res) => {
      this.article = []
      this.article = res.data.data

      event.target.complete(); // this is how you need to call in v4

    })

  }

  loadData(event) {
    this.reqObj.pageNo++;
    setTimeout(() => {
      this.userService.getCryptoNews(this.makeRequestObject()).subscribe((res) => {
        this.article = this.article.concat(res.data.data)

        event.target.complete(); // this is how you need to call in v4
      })

    }, 500);

  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  refresh(event) {
    if (event.type == 'refresh') {
      this.doRefresh(event.event)
    } else {
      this.loadData(event.event)

    }
  }

  makeRequestObject() {
    this.reqObj.sourceName = []
    this.reqObj.sentimate = []
    this.reqObj.topicName = []
    this.reqObj.coinId = []
    this.reqObj.totalRecord = 10

    this.reqObj.typeName = []

    if (this.selectedTitle.value == 'Article' || this.selectedTitle.value == 'Video') {
      this.reqObj.typeName.push(this.selectedTitle.value)
    } else {
      this.reqObj.topicName.push(this.selectedTitle.value)
    }

    return this.reqObj
  }
}
