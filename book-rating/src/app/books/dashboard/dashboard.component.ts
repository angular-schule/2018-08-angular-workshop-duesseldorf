import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private bs: BookStoreService) {}
  
  addBookToList(book: Book) {
    this.books = [...this.books, book];
  }


  updateSortList(book: Book) {
    /*
    // altes Buch aus der Liste entfernen
    const cleanedList = this.books.filter(b => b.isbn !== book.isbn);

    // neues Buch einfügen
    const updatedList = [...cleanedList, book];

    // sortieren
    updatedList.sort((a, b) => b.rating - a.rating);

    this.books = updatedList;*/

    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);
  }


  ngOnInit() {
    // this.books = this.bs.getAllStatic();
    this.bs.getAll().subscribe(
      books => this.books = books
    );
  }

  trackBook(index: number, item: Book) {
    return item.isbn;
  }

}
