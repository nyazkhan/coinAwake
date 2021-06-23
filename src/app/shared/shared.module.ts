import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCardComponent } from './new-card/new-card.component';
import { IonicModule } from '@ionic/angular';
import { NewDetailsComponent } from './new-details/new-details.component';
import { CustamTabsComponent } from './custam-tabs/custam-tabs.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CardlistComponent } from './cardlist/cardlist.component';



@NgModule({
  declarations: [NewCardComponent, CardlistComponent, CustamTabsComponent, NewDetailsComponent],
  imports: [
    CommonModule,
    IonicModule,

  ],
  exports: [
    NewCardComponent, CardlistComponent, CustamTabsComponent, NewDetailsComponent],
  entryComponents: [NewCardComponent, CardlistComponent, CustamTabsComponent, NewDetailsComponent],

})
export class SharedModule { }
