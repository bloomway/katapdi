import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviePaginationComponent } from './movie-pagination.component';
import { TotalPagesPipe } from '../../pipes/total-pages/total-pages.pipe';
import {MockDeclaration} from 'ng-mocks';

describe('MoviePaginationComponent', () => {
  let component: MoviePaginationComponent;
  let fixture: ComponentFixture<MoviePaginationComponent>;
  const currenPage = 0;
  const totalPages = 3;

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
    component.totalPages = totalPages;
    component.currentPage = currenPage;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 5 li elements', () => {
    const all = fixture.nativeElement.querySelectorAll('li');
    expect(all.length).toEqual(5);
  });

});
