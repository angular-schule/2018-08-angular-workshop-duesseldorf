import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { map, distinctUntilChanged, filter, debounceTime, mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Subscription, Subject, Observable } from 'rxjs';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit, OnDestroy {

  @Output() create = new EventEmitter<Book>();

  bookForm: FormGroup;

  destroy$ = new Subject();


  results$: Observable<string[]>;


  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl('')
    });

    this.results$ = this.bookForm.valueChanges.pipe(
      map(value => value.title),
      distinctUntilChanged(),
      debounceTime(1000),
      filter(title => title.length >= 3),
      switchMap(title => this.bs.search(title)),
      // takeUntil(this.destroy$),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  submitForm() {
    const value = this.bookForm.value;
    
    // Buch erzeugen
    const newBook: Book = {
      ...value,
      rating: 1
    };

    // Buch ans Dashboard schicken: Event (Output) (create)
    this.create.emit(newBook);

    this.bookForm.reset();
    /*this.bookForm.reset({
      isbn: '',
      title: '',
      description: ''
    });*/
  }

}
