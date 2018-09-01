import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  @Output() create = new EventEmitter<Book>();


  bookForm: FormGroup;

  constructor() { }

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

    this.bookForm.valueChanges
      .subscribe(value => console.log(value));
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
