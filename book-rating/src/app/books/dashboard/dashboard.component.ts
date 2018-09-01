import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() {}
  
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
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen, fortgeschrittene Techniken,',
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Ein anderes Framework',
        rating: 3
      },
      {
        isbn: '222',
        title: 'Vue.js',
        description: 'Für Hipster',
        rating: 4
      }
    ];
  }

  trackBook(index: number, item: Book) {
    return item.isbn;
  }

}
