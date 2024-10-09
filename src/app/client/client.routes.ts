import {Routes} from "@angular/router";
import {ClientHomepageComponent} from "./client-homepage/client-homepage.component";

export const clientRoutes: Routes = [
  {
    path: '',
    component: ClientHomepageComponent
  },
  {
    path: 'companies',
    loadComponent: () => import('./client-company/client-company.component').then(m => m.ClientCompanyComponent),
  }
];

