export const defaultMovie: Movie = {
  id: 3,
  tconst: 'tt0000003',
  originalTitle: 'Pauvre Pierrot',
  primaryTitle: 'Pauvre Pierrot',
  titleType: 'short',
  adult: 'No',
  startYear: '1892',
  endYear: '\\N',
  runtimeMinutes: '4',
  genres: 'Animation,Comedy,Romance',
};

export interface Movie {
  id: number;
  tconst: string;
  originalTitle: string;
  primaryTitle: string;
  titleType: string;
  adult: string;
  startYear: string;
  endYear: string;
  runtimeMinutes: string;
  genres: string;
}
