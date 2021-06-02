import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarketPage } from './market.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MarketPageRoutingModule } from './market-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MarketPageRoutingModule
  ],
  declarations: [MarketPage]
})
export class MarketPageModule {}
