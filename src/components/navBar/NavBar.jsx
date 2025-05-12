import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { BiMailSend } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
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
      <nav className={`navbar fixed-top bg-black ${styles.navbar} py-3`}>
        <div className="container-fluid d-flex justify-content-around flex-wrap gap-3">
          <Link to="/" className={`text-decoration-none fw-bold fs-1 ${styles.logo}`}>
            Movie App
          </Link>
        <div className="d-flex align-items-center gap-2">
          <form className="d-flex align-items-center" onSubmit={handleSearch}>
          <input
            className={`form-control ${styles.input}`}
            type="search"
            placeholder="Search Movies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={`fw-semibold fs-2 border-0 bg-white d-flex align-items-center ${styles.searchIcon}`} type="submit">
            <IoIosSearch className='me-1' />
          </button>
          </form>
          <Link to="/contact" className={`fs-1 ms-5 ${styles.icons}`}>
            <BiMailSend />
          </Link>
          <Link to="/login" className={`fs-3 ms-2 ${styles.icons}`}>
            <FaUser />
          </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
