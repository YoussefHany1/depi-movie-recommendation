import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchResults from '../../components/searchResults/SearchResults';
import './search.css';

function SearchPage() {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get('q'); 
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [minRating, setMinRating] = useState(0);


  useEffect(() => {
    const fetchResults = async () => {
      if (!queryParam) return;
      setLoading(true);
      
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTJkZjA2MTJkMDYxNWZiMmY1Mjk5NGNiOTY3OTkyNyIsIm5iZiI6MTc0MDMxOTA3NC43MjYsInN1YiI6IjY3YmIyOTYyYWJlZWRlMzZjNDQ2NzMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQXzYlftzN88HHdsDs528EOijg92mdpxxRTfgxS7hzI',
        },
      };

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${queryParam}&language=en-US&page=1`,
          options
        );
        const data = await res.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [queryParam]);

  return (
    <section id="search-page" className="pt-5 mt-5">

      <div className="container">
      {!loading && searchResults.length > 0 && (
          <h1 className="text-center fs-1 fw-bold">Search Results for "{queryParam}"</h1>
        )}
        {!loading && searchResults.length > 0 && (
        <div className="d-flex justify-content-center mb-4">
          <label className="me-2 fw-bold fs-5" htmlFor="ratingFilter">Filter by Rating:</label>
          <select
            id="ratingFilter"
            className="form-select w-auto"
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}>
            <option value={0}>All Ratings</option>
            <option value={5}>5+</option>
            <option value={6}>6+</option>
            <option value={7}>7+</option>
            <option value={8}>8+</option>
          </select>
        </div>
        )}
        {loading && <p className="text-center fs-3 fw-bold">Loading...</p>}
        {!loading && searchResults.length === 0 && <p className="text-center">No results found</p>}
        {!loading && (<SearchResults results={searchResults.filter(movie => movie.vote_average >= minRating)} />
        )}
      </div>
    </section>
  );
  
}

export default SearchPage;
