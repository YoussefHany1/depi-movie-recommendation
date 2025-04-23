import Header from '../../components/header/Header.jsx';
import Trending from '../../components/trending/Trending.jsx';
import TopRated from '../../components/topRated/TopRated.jsx';
import NewReleases from '../../components/newReleases/NewReleases.jsx';
import Tv from '../../components/tvShows/TvShows.jsx';
import '@splidejs/react-splide/css';
import './home.css';
function Home() {
  return (
    <>
      <Header />
      <Trending />
      <NewReleases />
      <TopRated />
      <Tv />
    </>
  )
}
export default Home