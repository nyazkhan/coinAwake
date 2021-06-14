import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDetailsComponent } from 'src/app/shared/new-details/new-details.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'dashboard',
    component: TabsPage,
    children: [
      {
        path: 'Home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'Explore',
        loadChildren: () => import('../explore/explore.module').then(m => m.ExplorePageModule)
      },
      {
        path: 'Market',
        loadChildren: () => import('../market/market.module').then(m => m.MarketPageModule)
      },
      {
        path: 'Profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'Alert',
        loadChildren: () => import('../alert/alert.module').then(m => m.AlertPageModule)
      },
       {
        path: 'news',
        component:  NewDetailsComponent
      },
      
      {
        path: '',
        redirectTo: '/dashboard/Home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
