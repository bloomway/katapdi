export const defaultMovie: Movie = {
  id: 0,
  tconst: "",
  originalTitle: "",
  primaryTitle: "",
  titleType: "",
  isAdult: false,
  startYear: "",
  endYear: "",
  runtimeMinutes: "",
  genres: "",
};

export interface Movie {
  id: number;
  tconst: string;
  originalTitle: string;
  primaryTitle: string;
  titleType: string;
  isAdult: boolean;
  startYear: string;
  endYear: string;
  runtimeMinutes: string;
  genres: string;
}
