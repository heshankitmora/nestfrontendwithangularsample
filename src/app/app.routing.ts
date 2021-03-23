import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';


export const AppRouting: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]}
];
