import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCardComponent } from './new-card/new-card.component';
import { IonicModule } from '@ionic/angular';
import { NewDetailsComponent } from './new-details/new-details.component';
import { CustamTabsComponent } from './custam-tabs/custam-tabs.component';



@NgModule({
  declarations: [NewCardComponent , CustamTabsComponent , NewDetailsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NewCardComponent , CustamTabsComponent , NewDetailsComponent],
  entryComponents: [NewCardComponent , CustamTabsComponent , NewDetailsComponent],

})
export class SharedModule { }
