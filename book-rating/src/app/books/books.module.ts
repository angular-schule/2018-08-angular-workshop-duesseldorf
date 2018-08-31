import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { ButtonSharedModule } from '../button-shared/button-shared.module';
import { FancyButtonComponent } from '../button-shared/fancy-button/fancy-button.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    ButtonSharedModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
