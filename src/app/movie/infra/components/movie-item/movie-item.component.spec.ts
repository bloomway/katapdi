import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieItemComponent } from './movie-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {defaultMovie, Movie} from '../../../domain/movie.model';
import {By} from '@angular/platform-browser';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;
  const movie: Movie =  { ...defaultMovie };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
          MovieItemComponent,
      ],
      imports: [
          ReactiveFormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    component.movie = movie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains two images', () => {
      const imgs = fixture.debugElement.queryAll(By.css('img'));
      expect(imgs.length).toEqual(2);
  });

  it('should display icon pencil as a first image', () => {
    const imgs = fixture.debugElement.queryAll(By.css('img'));
    const pencil: HTMLImageElement = imgs[0].nativeElement;
    expect(pencil.src).toContain('assets/images/icon_pencil.svg');
  });

  it('should display icon poster as a second image', () => {
    const imgs = fixture.debugElement.queryAll(By.css('img'));
    const poster: HTMLImageElement = imgs[1].nativeElement;
    expect(poster.src).toContain('assets/images/icon_poster.svg');
  });

});
