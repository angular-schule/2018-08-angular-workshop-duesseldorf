import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  constructor(private rs: BookRatingService) { }

  ngOnInit() {
    // DEMO
    this.rs.rateDown(this.book);
  }

  getRating() {
    return new Array(this.book.rating);
  }

}
