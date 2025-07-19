import './MovieList.scss';
import { MovieCard } from '../MovieCard';
import moviesFromServer from '../../api/movies.json';

export const MovieList = () => {
  return (
    <div className="movies">
      {moviesFromServer.map(movie => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <MovieCard key={movie.imdbId} {...movie} />
      ))}
    </div>
  );
};
