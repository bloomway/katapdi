import {MovieUiModel, Payload} from '../../../../dto/movie.dto';
import {Observable, of} from 'rxjs';
import {Movie} from '../../../../domain/movie.model';

const data = [
    {
        ID: 1,
        END_YEAR: '\\N',
        GENRES: 'Documentary,Short',
        IS_ADULT: false,
        ORIGINAL_TITLE: 'Carmencita',
        PRIMARY_TITLE: 'Carmencita',
        RUNTIME_MINUTES: '1',
        START_YEAR: '1894',
        TCONST: 'tt0000001',
        DATE_CHARGEMENT: '2021-10-19T16:09:14.446Z',
        TITLE_TYPE: 'short'
    },
    {
        ID: 2,
        END_YEAR: '\\N',
        GENRES: 'Animation,Short',
        IS_ADULT: false,
        ORIGINAL_TITLE: 'Le clown et ses chiens',
        PRIMARY_TITLE: 'Le clown et ses chiens',
        RUNTIME_MINUTES: '5',
        START_YEAR: '1892',
        TCONST: 'tt0000002',
        DATE_CHARGEMENT: '2021-10-19T16:09:14.461Z',
        TITLE_TYPE: 'short'
    },
    {
        ID: 3,
        END_YEAR: '\\N',
        GENRES: 'Animation,Comedy,Romance',
        IS_ADULT: false,
        ORIGINAL_TITLE: 'Pauvre Pierrot',
        PRIMARY_TITLE: 'Pauvre Pierrot',
        RUNTIME_MINUTES: '4',
        START_YEAR: '1892',
        TCONST: 'tt0000003',
        DATE_CHARGEMENT: '2021-10-19T16:09:14.461Z',
        TITLE_TYPE: 'short'
    },
    {
        ID: 4,
        END_YEAR: '\\N',
        GENRES: 'Animation,Short',
        IS_ADULT: false,
        ORIGINAL_TITLE: 'Un bon bock',
        PRIMARY_TITLE: 'Un bon bock',
        RUNTIME_MINUTES: '12',
        START_YEAR: '1892',
        TCONST: 'tt0000004',
        DATE_CHARGEMENT: '2021-10-19T16:09:14.461Z',
        TITLE_TYPE: 'short'
    },
    {
        ID: 5,
        END_YEAR: '\\N',
        GENRES: 'Comedy,Short',
        IS_ADULT: false,
        ORIGINAL_TITLE: 'Blacksmith Scene',
        PRIMARY_TITLE: 'Blacksmith Scene',
        RUNTIME_MINUTES: '1',
        START_YEAR: '1893',
        TCONST: 'tt0000005',
        DATE_CHARGEMENT: '2021-10-19T16:09:14.461Z',
        TITLE_TYPE: 'short'
    },
];

export class GetMoviesServiceMock {

    constructor() {
        console.log('[Mock]: Get Movies Service created');
    }

    getMovies(
        payload: Payload = {query: '', page: 0}
    ): Observable<MovieUiModel> {
        const movies = data;

        const state = new MovieUiModel();
        state.currentPage = 0;
        state.totalPages = 3;
        state.totalItems = 5;
        state.movies = movies.map((movieApi) =>
            this.toMovieDomainModel(movieApi)
        );
        return of(state);
    }

    private toMovieDomainModel(v: any): Movie {
        return {
            id: v.ID,
            tconst: v.TCONST,
            originalTitle: v.ORIGINAL_TITLE,
            primaryTitle: v.PRIMARY_TITLE,
            titleType: v.TITLE_TYPE,
            adult: v.IS_ADULT ? 'Y' : 'N',
            startYear: v.START_YEAR,
            endYear: 'N' === v.END_YEAR ? v.END_YEAR : '-',
            runtimeMinutes: 'N' === v.RUNTIME_MINUTES ? v.RUNTIME_MINUTES : '-',
            genres: 'N' === v.GENRES ? '-' : v.GENRES,
        } as Movie;
    }
}
