import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from '../slides.module.css'
function NewReleases() {
  const star = <svg fill="#E50000" viewBox="0 0 36 36"><path d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0 2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" /><path fill="none" d="M0 0h36v36H0z" /></svg>
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
        await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results);
        })
        // .then(movies => console.log(movies))
      } catch (err) {
        setError('Error fetching movies:', err);
        console.error(error);
      }finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
  // console.log(movies)
  if (loading) return <p className="text-center fs-3 fw-bold">Loading...</p>;
  return (
    <>
      <section className="pt-4" id="newReleases">
        <h3 className="header fs-1 fw-bold">New Releases</h3>
        <div className="cards d-flex">
        {error && <p className="fs-3 fw-bold m-auto">there is an error, try again later</p>}
            <Splide options={{ type: 'loop', pagination : false, gap: '2rem' }} className="py-5 overflow-hidden">
                {movies.map((movie) => (
                    movie.poster_path &&
                    <SplideSlide key={movie.id} className={`slide ${styles.slide}`}>
                      <div className={`content rounded-4 p-3 ${styles.content}`}>
                        <a href="#!"><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="rounded-4 mb-3" alt={movie.title} /></a>
                        <div className={`rate d-flex rounded-5 p-2 ${styles.rate}`}>{star} {movie.vote_average == 0 ? 'N/A' : movie.vote_average.toFixed(1) + '/10'}</div>
                      </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
      </section>
    </>
  )
}

export default NewReleases
