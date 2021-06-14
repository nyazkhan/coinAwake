import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
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

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  titles: any = [
    // {
    //   key: 'All',
    //   value: 'all'
    // },


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
      value: 'Analysis'
    },
    {
      data: [],
      key: 'Mining',
      value: 'Mining'
    },
    {
      data: [],
      key: 'Institution',
      value: 'Institution'
    },
    {
      data: [],
      key: 'Regulation',
      value: 'Regulation'
    },
    {
      data: [],
      key: 'NFT',
      value: 'NFT'
    },

  ]

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
  myOptions = {
    pagination: false,
    // onlyExternal: false,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        // tslint:disable-next-line: no-shadowed-variable
        const { $, slides, rtlTranslate: rtl } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = -offset$$1;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

          if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            // tslint:disable-next-line: max-line-length
            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            // tslint:disable-next-line: max-line-length
            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
            if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
          }
          $slideEl
            .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, activeIndex, $wrapperEl } = swiper;
        slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          // eslint-disable-next-line
          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) { return; }
            if (!swiper || swiper.destroyed) { return; }

            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    }
  };

  constructor(
    private router: Router,
    public modalController: ModalController,
    private userService: UserService,
    @Inject(DOCUMENT) document

  ) {
    this.getNewsData()


  }

  ngOnInit() {
  }
  filterby(val) {
    this.selectedTitle = val // this.titles.filter((ele) => ele.value == val); ;
    this.titles.findIndex((ele) => ele.key == val.key)
    this.slides.slideTo(this.titles.findIndex((ele) => ele == val), 10)
    // this.changeCategoryFilter(val.value)
  }


  getNewsData() {

    this.userService.getCryptoNews().subscribe((res) => {

      this.article = res.data

      this.titles.forEach((res, i) => {
        this.setData(res.value, i)
      })

    })
  }

  setData(key, i) {
    this.titles[i].data = this.article.filter(element => {
      return element.type.toLowerCase() == key.toLowerCase()
    });



  }

  // newsClick(val) {
  //   this.router.navigateByUrl('/news');


  // }





  changeCategoryFilter(newCategory: string) {
    // this.categoryFilter = newCategory;


  }


  slideChanged(e: any) {
    this.slides.getActiveIndex().then((index: number) => {
      this.selectedTitle = this.titles[index];
      // this.changeCategoryFilter(this.selectedTitle.value)

    });
  }

}
