import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MovieUiModel, Payload } from '../../dto/movie.dto';
import { Movie } from '../../domain/movie.model';
import { environment as env } from '../../../../environments/environment';

interface MovieApi {
  id: number;
  tconst: string;
  originalTitle: string;
  primaryTitle: string;
  titleType: string;
  adult: boolean;
  startYear: string;
  endYear: string;
  runtimeMinutes: string;
  genres: string[];
}

interface ApiResponse {
  statusCode: number;
  status: string;
  data?: {
    value: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
      movies: Array<MovieApi>;
    };
  };
  err?: string;
}

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  movies$: Observable<MovieUiModel>;

  private baseUrl: string = env.baseUrl;

  constructor(private http: HttpClient) {}

  getMovies(
    payload: Payload = { query: '', page: 0 }
  ): Observable<MovieUiModel> {
    const url = this.buildUrl(payload.query, payload.page);
    return this.http.get<ApiResponse>(url).pipe(
      map((response) => {
        const state = new MovieUiModel();

        const { currentPage, totalPages, totalItems, movies } =
          response.data?.value;

        state.currentPage = currentPage;
        state.totalPages = totalPages;
        state.totalItems = totalItems;
        state.movies = movies.map((movieApi) =>
          this.toMovieDomainModel(movieApi)
        );
        return state;
      })
    );
  }

  private buildUrl(query: string = '', page: number = 0): string {
    return `${this.baseUrl}/api/movies?k=${query}&p=${page}`;
  }

  private toMovieDomainModel(v: MovieApi): Movie {
    return {
      id: v.id,
      tconst: v.tconst,
      originalTitle: v.originalTitle,
      primaryTitle: v.primaryTitle,
      titleType: v.titleType,
      isAdult: v.adult,
      startYear: v.startYear,
      endYear: 'N' === v.endYear ? v.endYear : '-',
      runtimeMinutes: 'N' === v.runtimeMinutes ? v.runtimeMinutes : '-',
      genres: v.genres.join(','),
    } as Movie;
  }
}
