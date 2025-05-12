import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/homePage/Home.jsx';
import SearchPage from './pages/searchpage/SearchPage.jsx';
import MovieDetailsPage from './pages/details/details.jsx';
import Loginpage from'./pages/LoginPage/LoginPage.jsx';
import SignUppage from'./pages/SignUpPage/SignUpPage.jsx';
import ContactUs from './pages/contactUs/contactUs.jsx';
import Movies from './pages/moviesPage/Movies.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
function App() {
  return (
    <>
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/login" element={<Loginpage/>} />
        <Route path="/signup" element={<SignUppage/>} />
        <Route path="/contact" element={<ContactUs />} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}
export default App
