import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviePaginationComponent } from './movie-pagination.component';
import { TotalPagesPipe } from '../../pipes/total-pages/total-pages.pipe';
import {MockDeclaration} from 'ng-mocks';

describe('MoviePaginationComponent', () => {
  let component: MoviePaginationComponent;
  let fixture: ComponentFixture<MoviePaginationComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        MoviePaginationComponent,
        TotalPagesPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display one unordered list item', () => {
    const ul = fixture.nativeElement.querySelectorAll('ul');
    expect(ul.length).toEqual(1);
  });

  it('should not display list item when totalPage is equal to zero', () => {

    component.totalPages = 0;
    component.currentPage = 0;
    fixture.detectChanges();

    const ul = fixture.nativeElement.querySelectorAll('ul');
    expect(ul.length).toEqual(0);
  });

  it('should display five list items', () => {

    component.totalPages = 3;
    component.currentPage = 0;
    fixture.detectChanges();

    const li = fixture.nativeElement.querySelectorAll('li');
    expect(li.length).toEqual(5);
  });

  it('should display eight li items', () => {

    component.totalPages = 20;
    component.currentPage = 0;
    fixture.detectChanges();

    const li = fixture.nativeElement.querySelectorAll('li');
    expect(li.length).toEqual(8);
  });

});
