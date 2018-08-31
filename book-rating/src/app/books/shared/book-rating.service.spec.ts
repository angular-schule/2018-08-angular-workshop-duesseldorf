import { TestBed, inject } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';
import { Book } from './book';

fdescribe('BookRatingService', () => {
  let rs: BookRatingService;
  let book: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookRatingService]
    });

    rs = TestBed.get(BookRatingService);
  });

  beforeEach(() => {
    book = {
      isbn: '000',
      title: 'b',
      description: 'a',
      rating: 3
    };
  });

  it('should be created', inject([BookRatingService], (service: BookRatingService) => {
    expect(service).toBeTruthy();
  }));

  it('should rate up a book by one for rateUp', () => {
    const ratedBook = rs.rateUp(book);
    expect(ratedBook.rating).toBe(4);
  });

  it('should rate down a book by one for rateDown', () => {
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });
  
  it('should not change anything else than rating for rateUp', () => {
    const ratedBook = rs.rateUp(book);
    expect(ratedBook.isbn).toBe(book.isbn, 'isbn has been changed');
    expect(ratedBook.description).toBe(book.description, 'description has been changed');
    expect(ratedBook.title).toBe(book.title, 'title has been changed');
  });
  
  it('should always return a new book for rateDown', () => {
    const ratedBook = rs.rateDown(book);
    expect(ratedBook).not.toBe(book);
  });
  
  it('should not be allowed to rate higher than 5', () => {
    book.rating = 5;
    const ratedBook = rs.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });
  
  it('should not be allowed to rate lower than 1', () => {
    book.rating = 1;
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });

});
