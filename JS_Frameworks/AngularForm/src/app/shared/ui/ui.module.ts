import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../../shared/ui/header/header.component';
import { LayoutComponent } from '../../shared/ui/layout/layout.component';
import { FooterComponent } from '../../shared/ui/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class UiModule { }
