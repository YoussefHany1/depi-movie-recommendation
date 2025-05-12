import { useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchHeader } from "../../redux/headerSlice";
import styles from './header.module.css'
const Header = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.header);

  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);
  
  return (
    <header className="pt-sm-3 pb-5">
      {error && <p className="text-center fs-3 fw-bold">there is an error, try again later</p>}
      {loading && <p className="text-center fs-3 fw-bold">Loading...</p>}
      {movies.length > 0 && 
        <Splide options={{ rewind: true, type: 'loop', pagination : false, autoplay: true}} className="mt-4">
            {movies.length > 0 &&
            movies.map((movie) => (
              movie.backdrop_path &&
              <SplideSlide key={movie.id} className={`slide ${styles.slide}`}>
                <div className={`background position-absolute w-100 h-100 z-1 ${styles.background}`}></div>
                  <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="w-100 rounded-4 object-fit-cover" alt={movie.title} />
                  <div className={`text text-center position-absolute z-2 w-100 ${styles.text}`}>
                    <Link to={`/movie/${movie.id}`} className="text-white fs-1 fw-bold text-decoration-none">{movie.title}</Link>
                    <p>{movie.overview.substring(0, 30)}..</p>
                  </div>
              </SplideSlide>
            ))}
      </Splide>}
    </header>
  );
};
export default Header;