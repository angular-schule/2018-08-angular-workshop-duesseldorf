import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { ButtonSharedModule } from '../button-shared/button-shared.module';
import { FancyButtonComponent } from '../button-shared/fancy-button/fancy-button.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    ButtonSharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponent,
    BookDetailsComponent
  ],
  exports: []
})
export class BooksModule { }
