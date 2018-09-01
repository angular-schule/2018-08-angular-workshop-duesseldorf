import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books`).pipe( // TODO: eigenes Interface für Response
      map(rawBooks => rawBooks.map(rawBook => {
        return {
          isbn: rawBook.isbn,
          title: rawBook.title,
          description: rawBook.description,
          rating: rawBook.rating
        };
      }))
    );
  }


  getAllStatic(): Book[] {
    return [
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
    ]
  }
}
