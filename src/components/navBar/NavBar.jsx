import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <nav className={`navbar fixed-top ${styles.navbar}`}>
        <div className="container-fluid justify-content-around">
          <div>
            <a className={`navbar-brand fs-1 fw-bold  ${styles.brand}`} href='#'>Movie App</a>
          </div>
          <form className="d-flex pt-2 pt-lg-0" role="search" onSubmit={handleSearch}>
            <input
             className={`input form-control me-2 ${styles.input}`} 
             type="search" 
             placeholder="Search Movies" 
             aria-label="Search"
             value={query}
             onChange={(e) => setQuery(e.target.value)} 
            />
            <button className="btn btn-outline-danger" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavBar
