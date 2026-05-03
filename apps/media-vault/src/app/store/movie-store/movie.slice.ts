interface MovieSlice {
  searchResults: string[];
  selectedMovie: Movie | null;
}
interface Image {
  url: string,
  width: number,
  height: number,
}

interface Rating {
  aggregateRating: number,
  voteCount: number,
}

export interface Movie {
  id: string,
  type: string,
  primaryTitle: string,
  originalTitle: string,
  primaryImage: Image,
  startYear: number,
  runTimeSeconds: number,
  genres: string[],
  rating: Rating,
  plot: string,
}

export const initialMovieSlice: MovieSlice = {
  searchResults: [],
  selectedMovie: null,
}