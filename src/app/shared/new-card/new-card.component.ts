import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';
import { NewDetailsComponent } from '../new-details/new-details.component';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})
export class NewCardComponent implements OnInit {
  @Input() card: any;

  constructor(private userService: UserService ,     public modalController: ModalController,
    ) {
      console.log(this.card);
      
     }

  ngOnInit() { }
  diff_hours(dt1) {

    var diff = ((new Date()).getTime() - (new Date(dt1)).getTime()) / 1000;
    diff /= (60 * 60);
    if (Math.abs(Math.round(diff)) > 24) {
      let day = Math.round(Math.abs(Math.round(diff)) / 24);
      return 'About ' + day + ' Day ago'
    } else {

      return 'About ' + Math.abs(Math.round(diff)) + ' min ago'
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
}
