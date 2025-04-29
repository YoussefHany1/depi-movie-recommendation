import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './header.module.css'
const Header = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const options = {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTJkZjA2MTJkMDYxNWZiMmY1Mjk5NGNiOTY3OTkyNyIsIm5iZiI6MTc0MDMxOTA3NC43MjYsInN1YiI6IjY3YmIyOTYyYWJlZWRlMzZjNDQ2NzMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQXzYlftzN88HHdsDs528EOijg92mdpxxRTfgxS7hzI'
    }
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing',{...options,});
        setMovies(response.data.results);
      } catch (err) {
        setError(err.message || 'Error while fetching movies');
        console.error(`Error while fetching movies ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
  if (loading) return <p>Loading...</p>;
  // console.log(movies);
  return (
    <header className="pt-sm-3 ">
      {error && <p>there is an error, try again later</p>}
      <Splide options={{ rewind: true, type: 'loop', pagination : false, autoplay: true}} className="mt-4">
            {movies.length > 0 &&
            movies.map((movie) => (
              movie.backdrop_path &&
              <SplideSlide key={movie.id} className={`slide ${styles.slide}`}>
                <div className={`background ${styles.background}`}></div>
                  <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="w-100 rounded-4" alt={movie.title} />
                  <div className={`text text-center position-absolute z-2 w-100 ${styles.text}`}>
                    <Link to={`/movie/${movie.id}`} className="text-white fs-1 fw-bold text-decoration-none">{movie.title}</Link>
                    <p>{movie.overview.substring(0, 30)}..</p>
                  </div>
              </SplideSlide>
            ))}
      </Splide>
    </header>
  );
};

export default Header;
