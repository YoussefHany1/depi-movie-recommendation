import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from './header.module.css'
const Header = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const movieIds = [299534, 696506, 454626, 475557, 76600];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await Promise.all(
          movieIds.map(async (id) => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
              headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTJkZjA2MTJkMDYxNWZiMmY1Mjk5NGNiOTY3OTkyNyIsIm5iZiI6MTc0MDMxOTA3NC43MjYsInN1YiI6IjY3YmIyOTYyYWJlZWRlMzZjNDQ2NzMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQXzYlftzN88HHdsDs528EOijg92mdpxxRTfgxS7hzI',
                accept: 'application/json'
              }
            });
            return await res.json();
          })
        );
        setMovies(fetchedMovies);
        setLoading(false);
      } catch (err) {
        setError(`There is error in fetching movies ${err}`);
        setLoading(false);
        console.error(error);
      }
    };

    fetchMovies();
  }, []);
  if (loading) return <p>Loading...</p>;
  // console.log(movies);
  return (
    <header className="pt-sm-3 pt-5">
      {error && <p>there is an error, try again later</p>}
      <Splide options={{ rewind: true, type: 'loop', perPage: 1, perMove: 1, pagination : false, autoplay: true}} className="header py-5 mt-5">
            {movies.map((movie) => (
              movie.poster_path &&
              
              <SplideSlide key={movie.id} className={`slide ${styles.slide}`}>
                <div className={`background ${styles.background}`}></div>
                  <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="w-100 rounded-4" alt={movie.title} />

                  <div className={`text text-center position-absolute z-2 w-100 ${styles.text}`}>
                    <h2 className="text-white fw-bold">{movie.title}</h2>
                    <p>{movie.tagline}</p>
                  </div>
              </SplideSlide>
            ))}
      </Splide>
    </header>
  );
};

export default Header;
