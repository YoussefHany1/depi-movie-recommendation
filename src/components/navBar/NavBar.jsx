import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css'
function NavBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <>
      <nav className={`navbar fixed-top ${styles.navbar} py-4`}>
        <div className="container-fluid justify-content-around gap-2 flex-column flex-sm-row">
          <div>
            <Link to='/' className={`text-decoration-none fw-bold  ${styles.brand}`}>Movie App</Link>
          </div>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
             className={`input form-control w-100 me-3 fs-5 ${styles.input}`} 
             type="search" 
             placeholder="Search Movies" 
             aria-label="Search"
             value={query}
             onChange={(e) => setQuery(e.target.value)} 
            />
            <button className="btn btn-danger btn-sm fs-5 fw-semibold px-3" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavBar
