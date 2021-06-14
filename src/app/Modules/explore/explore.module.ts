import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExplorePage } from './explore.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ExplorePageRoutingModule } from './explore-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewCardComponent } from 'src/app/shared/new-card/new-card.component';
import { CustamTabsComponent } from 'src/app/shared/custam-tabs/custam-tabs.component';
import { FilterProductByCategory } from 'src/app/service/pipe/filterByType';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ExplorePageRoutingModule,
    SharedModule
  ],
  declarations: [ExplorePage , FilterProductByCategory],
  entryComponents:[NewCardComponent , CustamTabsComponent]
})
export class ExplorePageModule {}
