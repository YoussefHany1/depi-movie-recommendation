import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './details.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [cast, setCast] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTJkZjA2MTJkMDYxNWZiMmY1Mjk5NGNiOTY3OTkyNyIsIm5iZiI6MTc0MDMxOTA3NC43MjYsInN1YiI6IjY3YmIyOTYyYWJlZWRlMzZjNDQ2NzMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQXzYlftzN88HHdsDs528EOijg92mdpxxRTfgxS7hzI',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieRes, videoRes, creditsRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options).then(res => res.json()),
          fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options).then(res => res.json()),
          fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options).then(res => res.json()),
        ]);

        setMovie(movieRes);

        const trailerVideo = videoRes.results.find(
          video => video.type === 'Trailer' && video.site === 'YouTube'
        );
        setTrailer(trailerVideo);

        setCast(creditsRes.cast.slice(0, 8));
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!movie) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      {/* Movie Info */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h1>{movie.title}</h1>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Genres:</strong> {movie.genres?.map(g => g.name).join(', ')}</p>
        </div>
      </div>

      {/* Cast */}
      <div className="mt-5">
        <h3>Top Cast</h3>
        <div className="row">
          {cast.map(actor => (
            <div className="col-6 col-md-3 mb-4 text-center" key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                    : 'https://via.placeholder.com/185x278?text=No+Image'
                }
                alt={actor.name}
                className="img-fluid rounded mb-2 shadow-sm"
              />
              <div><strong>{actor.name}</strong></div>
              <div className="text-muted small">as {actor.character}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trailer */}
      {trailer && (
        <div className="mt-5">
          <h3>Watch Trailer</h3>
          <div className="ratio ratio-16x9">
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
