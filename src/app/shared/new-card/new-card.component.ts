import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';
import { NewDetailsComponent } from '../new-details/new-details.component';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})
export class NewCardComponent implements OnInit {
  @Input() card: any;

  constructor(private userService: UserService, private iab: InAppBrowser, public modalController: ModalController,
  ) {
    console.log(this.card);

  }

  ngOnInit() { }

  convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
  }
  diff_hours(dt1) {
    let d2 = (new Date(dt1)).getTime() 
  let d3  = (new Date()).getTime()
    var diff = (d3 - d2) / 1000;
    diff /= (60 * 60);
    if (Math.abs(Math.round(diff)) > 24) {
      let day = Math.round(Math.abs(Math.round(diff)) / 24);
      return 'About ' + day + ' Day ago'
    } else if (Math.abs(Math.round(diff)) > 0) {

      return 'About ' + Math.abs(Math.round(diff)) + ' hr ago'
    } else {
      return 'About ' + Math.abs(Math.round(diff * 60)) + ' min ago'

    }

  }

  bookmark() {
    if (this.card.bookmark) {
      this.userService.removeFromBookmark(this.card)
    } else {

      this.userService.addToBookmark(this.card);
    }
    this.card.bookmark = !this.card.bookmark
  }

  async newsClick(val) {
    const modal = await this.modalController.create({
      component: NewDetailsComponent,
      componentProps: {

        newsDetails: val,
      }
    });
    return await modal.present();
  }


  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no',
      hideurlbar: 'yes',
      closebuttoncaption: 'Back',
      closebuttoncolor: '#ffffff',
      toolbarcolor: '#1c52bb',
      fullscreen: 'no',
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.iab.create(url, '_self', options);
    browser.insertCSS({ code: "body{font-size: 25px;}" });
    browser.show()

    // Inject scripts, css and more with browser.X
  }
}
