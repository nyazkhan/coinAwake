import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertPage } from './alert.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AlertPageRoutingModule } from './alert-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AlertPageRoutingModule
  ],
  declarations: [AlertPage]
})
export class AlertPageModule {}
