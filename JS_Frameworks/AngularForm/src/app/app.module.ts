import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routingModule } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { UiModule } from './shared/ui/ui.module';
import { FakeBackendInterceptor } from './shared/fakebackend';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './Components/items/services/guards/auth.guard';
import { TokenIntercept } from './auth/tokenintercept';

import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { ItemsModule } from './Components/items/items.module';
import { ItemsService } from './Components/items/services/items.service';
import { AuthService } from './auth/services/auth.service';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    ForgotPasswordComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    UiModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    routingModule,
    ReactiveFormsModule,
    FormsModule,
    ItemsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'},
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercept,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    },
    AuthService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
