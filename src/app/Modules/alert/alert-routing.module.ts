import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertPage } from './alert.page';

const routes: Routes = [
  {
    path: '',
    component: AlertPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertPageRoutingModule {}
