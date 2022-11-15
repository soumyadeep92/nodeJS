import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './Components/items/services/guards/auth.guard';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { registerLocaleData } from '@angular/common';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
/*
* Routing for the items feature are stored in the items module file
*/

const routes: Routes = [

    { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '',  redirectTo: '/dashboard', pathMatch: 'full' }, // catch all route

];
export const routingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
