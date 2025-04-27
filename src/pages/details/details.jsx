import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d66f55d94b1dbb7043925745f5f8b7ba`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <p className="text-center my-5">Loading...</p>;

  return (
    <div className="container mt-">
      <div className="row">
        <div className="col-md-4">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              className="img-fluid"
              alt={movie.title}
            />
          ) : (
            <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '400px' }}>
              No Image
            </div>
          )}
        </div>
        <div className="col-md-8">
          <h2>{movie.title}</h2>
          <p className="text-muted">{movie.release_date} | Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;