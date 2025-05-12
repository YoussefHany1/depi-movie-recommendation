import { useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchTopRated } from "../../redux/topRatedSlice";
import styles from '../slides.module.css'

function TopRated() {
  const starSVG = <svg fill="var(--primary)" viewBox="0 0 36 36"><path d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0 2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" /><path fill="none" d="M0 0h36v36H0z" /></svg>
  const arrowSVG = <svg viewBox="0 0 60 60"><path stroke="var(--primary)" strokeWidth="3" d="M15.563 40.836a.997.997 0 0 0 1.414 0l15-15a1 1 0 0 0 0-1.414l-15-15a.999.999 0 1 0-1.414 1.414l14.293 14.293-14.293 14.293a1 1 0 0 0 0 1.414"/></svg>

  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.topRated);
  useEffect(() => {
    dispatch(fetchTopRated());
  }, [dispatch]);
  return (
    <>
      <section className="pt-4" id="top-rated">
        <div className="header d-flex justify-content-between align-items-center">
          <h3 className={`fs-1 fw-bold`}>Top Rated</h3>
          <Link to={`/movies`} className={`text-decoration-none d-flex align-items-center text-nowrap ${styles.view}`}>View All {arrowSVG}</Link>
        </div>
        <div className="cards d-flex">
          {loading && <p className="fs-3 fw-bold m-auto">Loading...</p>}
          {error && <p className="fs-3 fw-bold m-auto">there is an error, try again later</p>}
          {movies.length > 0 &&    
            <Splide options={{ type: 'loop', pagination : false, gap: '3rem' }} className="py-5 overflow-hidden">
                {movies.map((movie) => (
                    movie.poster_path &&
                    <SplideSlide key={movie.id} className={`slide ${styles.slide}`}>
                      <div className={`content rounded-4 p-3 ${styles.content}`}>
                        <Link to={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="rounded-4 mb-3" alt={movie.title} /></Link>
                        <div className={`rate d-flex rounded-5 p-2 ${styles.rate}`}>{starSVG} {movie.vote_average == 0 ? 'N/A' : movie.vote_average.toFixed(1) + '/10'}</div>
                      </div>
                    </SplideSlide>
                ))}
            </Splide>
          }
        </div>
      </section>
    </>
  )
}

export default TopRated
