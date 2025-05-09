import { configureStore } from '@reduxjs/toolkit';
import trendingReducer from './trendingSlice';
import topRatedReducer from './topRatedSlice';
import newReleasesReducer from './newReleasesSlice';
import tvShowsReducer from './tvShowsSlice';
import headerReducer from './headerSlice';

const store = configureStore({
  reducer: {
    header: headerReducer,
    trending: trendingReducer,
    topRated: topRatedReducer,
    newReleases: newReleasesReducer,
    tvShows: tvShowsReducer,
  },
});
export default store;