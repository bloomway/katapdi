import {TestBed} from '@angular/core/testing';

import { GetMoviesService } from './get-movies.service';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {defaultMovie, Movie} from '../../domain/movie.model';
import {environment} from '../../../../environments/environment';

describe('GetMoviesService', () => {
  let underTest: GetMoviesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    underTest = TestBed.inject(GetMoviesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(underTest).toBeTruthy();
  });

  it('#getMovies should return expected movies', () => {
    const query = '';
    const page = 0;
    const baseUrl = environment.baseUrl;
    const expectedUrl = `${baseUrl}/api/movies?k=${query}&p=${page}`;
    const expectedResult = {
      currentPage: 0,
      totalPages: 3,
      totalItems: 60,
      movies: [{...defaultMovie}, {...defaultMovie}]
    };
    underTest.getMovies().subscribe(
        (res) => expect({...res}).toEqual(expectedResult)
    );

    const request: TestRequest = httpTestingController.expectOne(expectedUrl);
    request.flush(expectedResult);
    httpTestingController.verify();
  });

  it('#getMovies should use "get" to retrieve data', () => {
    const query = '';
    const page = 0;
    const baseUrl = environment.baseUrl;
    const expectedUrl = `${baseUrl}/api/movies?k=${query}&p=${page}`;
    underTest.getMovies().subscribe();

    const request: TestRequest = httpTestingController.expectOne(expectedUrl);
    expect(request.request.method.toLowerCase()).toEqual('get');
  });
});

