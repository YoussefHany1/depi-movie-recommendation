import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css'
import { FaUser } from 'react-icons/fa';
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
     <nav className={`navbar fixed-top  ${styles.navbar} py-3`}>
  <div className="container-fluid d-flex justify-content-around  flex-wrap gap-3">
    
    <Link to="/" className={`text-decoration-none fw-bold ${styles.brand}`}>
      Movie App
    </Link>

    <div className="d-flex align-items-center gap-2">
      <form className="d-flex align-items-center" onSubmit={handleSearch}>
        <input
          className={`form-control me-2 ${styles.input}`}
          type="search"
          placeholder="Search Movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-danger btn-sm fw-semibold" type="submit">
          Search
        </button>
      </form>
      <Link to="/login" className={`  ${styles.loginBtn} ms-5`}>
    <FaUser className={styles.userIcon} />
      </Link>
    </div>
  </div>
</nav>
    </>
  );
}

export default NavBar;
