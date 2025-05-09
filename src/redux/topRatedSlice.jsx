import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTopRated = createAsyncThunk(
  'topRated/fetchTopRated',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTJkZjA2MTJkMDYxNWZiMmY1Mjk5NGNiOTY3OTkyNyIsIm5iZiI6MTc0MDMxOTA3NC43MjYsInN1YiI6IjY3YmIyOTYyYWJlZWRlMzZjNDQ2NzMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQXzYlftzN88HHdsDs528EOijg92mdpxxRTfgxS7hzI'
        }
      };
      const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', options);
      return response.data.results;
    } catch (err) {
      return rejectWithValue(err.message || 'Error while fetching top rated Movies');
    }
  }
);

const topRatedSlice = createSlice({
  name: 'topRated',
  initialState: { movies: [], loading: true, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRated.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopRated.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchTopRated.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  }
});

export default topRatedSlice.reducer;