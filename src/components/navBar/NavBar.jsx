import styles from './navBar.module.css'
function NavBar() {

  return (
    <>
      <nav className={`navbar fixed-top ${styles.navbar}`}>
        <div className="container-fluid justify-content-around">
          <div>
            <a className={`navbar-brand fs-1 fw-bold  ${styles.brand}`} href='#'>Movie App</a>
          </div>
          <form className="d-flex pt-2 pt-lg-0" role="search">
            <input className={`input form-control me-2 ${styles.input}`} type="search" placeholder="Search Movies" aria-label="Search" />
            <a href='#tvShows'><button className="btn btn-outline-danger" type="submit">Search</button></a>
          </form>
        </div>
      </nav>
    </>
  )
}

export default NavBar
