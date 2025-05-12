import { configureStore } from '@reduxjs/toolkit';
import trendingReducer from './trendingSlice';
import topRatedReducer from './topRatedSlice';
import newReleasesReducer from './newReleasesSlice';
import tvShowsReducer from './tvShowsSlice';
import headerReducer from './headerSlice';
import moviesReducer from './moviesSlice';
const store = configureStore({
  reducer: {
    header: headerReducer,
    trending: trendingReducer,
    topRated: topRatedReducer,
    newReleases: newReleasesReducer,
    tvShows: tvShowsReducer,
    movies: moviesReducer,
  },
});
export default store;