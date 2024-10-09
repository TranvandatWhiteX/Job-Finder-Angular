import { Routes } from '@angular/router';
import {clientRoutes} from "./client/client.routes";
import {adminRoutes} from "./admin/admin.routes";
import {enterpriseRoutes} from "./enterprise/enterprise.routes";
import {recruiterRoutes} from "./recruiter/recruiter.routes";


export const routes: Routes = [
  ...clientRoutes,
  ...adminRoutes,
  ...enterpriseRoutes,
  ...recruiterRoutes
];
