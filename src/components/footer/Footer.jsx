import styles from './footer.module.css'
function Footer() {
  const facebook = <svg fill="#fff" viewBox="-1 2 16 16" className='rounded-3'> <path d="M12.538 9.62a6.038 6.038 0 1 0-6.981 5.964v-4.22H4.023V9.62h1.534V8.29a2.13 2.13 0 0 1 2.28-2.349 9 9 0 0 1 1.352.118v1.486h-.762a.873.873 0 0 0-.984.943V9.62h1.675l-.268 1.746H7.443v4.22a6.04 6.04 0 0 0 5.095-5.966" /></svg>;
  const twitter = <svg fill="#fff" viewBox="0 0 16 16" className='rounded-3'> <path d="M15 3.784a5.6 5.6 0 0 1-.65.803 6 6 0 0 1-.786.68 5 5 0 0 1 .014.377q0 .86-.184 1.702a8.5 8.5 0 0 1-.534 1.627 8.4 8.4 0 0 1-1.264 2.04 7.8 7.8 0 0 1-1.72 1.521 7.8 7.8 0 0 1-2.095.95 8.5 8.5 0 0 1-2.379.329 8.2 8.2 0 0 1-2.293-.325A8 8 0 0 1 1 12.52a5.76 5.76 0 0 0 4.252-1.19 2.84 2.84 0 0 1-2.273-1.19 2.9 2.9 0 0 1-.407-.8q.137.021.27.035a2.8 2.8 0 0 0 1.022-.089 2.8 2.8 0 0 1-.926-.362 3 3 0 0 1-.728-.633 2.84 2.84 0 0 1-.65-1.822v-.033q.603.34 1.306.362a2.94 2.94 0 0 1-.936-1.04 3 3 0 0 1-.253-.649 2.95 2.95 0 0 1 .007-1.453q.095-.364.294-.693.546.677 1.216 1.213a8.2 8.2 0 0 0 3.008 1.525 8 8 0 0 0 1.695.263 2 2 0 0 1-.058-.325 3 3 0 0 1-.017-.331q0-.596.226-1.118a2.9 2.9 0 0 1 1.528-1.528 2.8 2.8 0 0 1 1.117-.225 2.85 2.85 0 0 1 2.099.909 5.7 5.7 0 0 0 1.818-.698 2.82 2.82 0 0 1-1.258 1.586A5.7 5.7 0 0 0 15 3.785z" /> </svg>
  const instagram = <svg fill="#fff" viewBox="-2 -2 24 24" className='rounded-3'><path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0m3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z" /><path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31"/><circle cx={15.156} cy={4.858} r={1.237} /></svg>

  return (
    <>
      <footer className="bg-black pt-5">
        <div className={`container d-flex flex-wrap justify-content-between pb-5 ${styles.container}`}>
          <ul className="list-unstyled lh-lg px-3">
            <li><a href="#" className="text-decoration-none text-white">Home</a></li>
            <li><a href="#!" className="text-decoration-none">Categories</a></li>
            <li><a href="#!" className="text-decoration-none">Devices</a></li>
            <li><a href="#!" className="text-decoration-none">Pricing</a></li>
            <li><a href="#!" className="text-decoration-none">FAQ</a></li>
          </ul>
          <ul className="list-unstyled lh-lg px-3">
            <li><a href="movies" className="text-decoration-none text-white">Movies</a></li>
            <li><a href="#trending" className="text-decoration-none">Trending</a></li>
            <li><a href="#top-rated" className="text-decoration-none">Top Rated</a></li>
            <li><a href="#newReleases" className="text-decoration-none">Upcoming</a></li>
            <li><a href="#!" className="text-decoration-none">Popular</a></li>
          </ul>
          <ul className="list-unstyled lh-lg px-3">
            <li><a href="#tvShows" className="text-decoration-none text-white">TV Shows</a></li>
            <li><a href="#tvShows" className="text-decoration-none">Trending</a></li>
            <li><a href="#!" className="text-decoration-none">Top Rated</a></li>
            <li><a href="#!" className="text-decoration-none">Upcoming</a></li>
            <li><a href="#!" className=" text-decoration-none">Popular</a></li>
          </ul>
          <ul className="list-unstyled lh-lg px-3">
            <li><a href="#!" className="text-decoration-none text-white">Support</a></li>
            <li><a href="contact" className="text-decoration-none">Contact Us</a></li>
          </ul>
          <div>
            <h5 className="text-white mb-3">Connect with us</h5>
            <div className={`social ${styles.social}`}>
              <a href="#!" className="text-decoration-none me-3">{facebook}</a>
              <a href="#!" className="text-decoration-none me-3">{twitter}</a>
              <a href="#!" className="text-decoration-none me-3">{instagram}</a>
            </div>
          </div>
        </div>
          <div className="px-sm-5 px-4 pb-4">
            <hr className="text-white"></hr>
            <div className={`copyright d-flex flex-wrap justify-content-between ${styles.copyright}`}>
              <p className="ms-sm-5 ">Copyright &copy; 2025. All rights reserved</p>
              <div className="d-flex me-5">
                <p><a href="#!" className="text-decoration-none me-3">Terms & Conditions</a></p>
                <p><a href="#!" className="text-decoration-none me-3">Privacy Policy</a></p>
                <p><a href="#!" className="text-decoration-none me-3">Cookie Policy</a></p>
              </div>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
