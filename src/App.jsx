import NavBar from './components/navBar/NavBar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/HomePage/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
function App() {

  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  )
}

export default App
