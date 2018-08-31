import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookComponent } from './book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { Book } from '../shared/book';


describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let serviceMock: BookRatingService;

  beforeEach(() => {
    serviceMock = {
      rateUp: (b: Book) => {
        console.log('RAAAAAAAATE UP MOCK!');
        return b;
      },
      rateDown: (b: Book) => {
        return b;
      }
    };
  });


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      providers: [
        { provide: BookRatingService, useValue: serviceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '000',
      title: 'a',
      description: 'b',
      rating: 3
    };

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call rateUp() on up button click', () => {
    spyOn(component, 'rateUp');

    const rateUpBtn = fixture.debugElement.query(By.css('.testing-rate-up-btn'));
    rateUpBtn.nativeElement.click();

    expect(component.rateUp).toHaveBeenCalled();
  });

  it('should call service.rateUp() for comp.rateUp()', () => {
    const rs = TestBed.get(BookRatingService);
    spyOn(rs, 'rateUp');

    component.rateUp();

    expect(rs.rateUp).toHaveBeenCalledTimes(1);
  });

  xit('should throw "rate" event for rateUp()', () => {
    let emittedBook: Book;

    component.rate.subscribe(b => {
      emittedBook = b;
    });

    component.rateUp();

    expect(emittedBook).toBeTruthy();
  });

  xit('should display the correct rating', () => {
    const ratingBox = fixture
      .debugElement
      .query(By.css('.testing-rating-box'))
      .nativeElement;

    expect(ratingBox.textContent).toBe('3');
  });
});
