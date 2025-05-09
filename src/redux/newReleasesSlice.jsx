import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNewReleases = createAsyncThunk(
  'newReleases/fetchNewReleases',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTJkZjA2MTJkMDYxNWZiMmY1Mjk5NGNiOTY3OTkyNyIsIm5iZiI6MTc0MDMxOTA3NC43MjYsInN1YiI6IjY3YmIyOTYyYWJlZWRlMzZjNDQ2NzMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQXzYlftzN88HHdsDs528EOijg92mdpxxRTfgxS7hzI'
        }
      };
      const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming', options);
      return response.data.results;
    } catch (err) {
      return rejectWithValue(err.message || 'Error while fetching top rated Movies');
    }
  }
);

const newReleasesSlice = createSlice({
  name: 'newReleases',
  initialState: { movies: [], loading: true, error: null},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewReleases.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewReleases.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchNewReleases.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  }
});

export default newReleasesSlice.reducer;