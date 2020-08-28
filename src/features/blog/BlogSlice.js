import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as BlogApi from '../../api/BlogApi';
import { setLoading } from '../loader/LoaderSlice';

export const fetchBlogs = createAsyncThunk(
  'blog/getList',
  async (params, thunkAPI) => {
    console.log(params);
      const blogs = await BlogApi.fetchBlogs();
      return blogs;
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogs: [],
    error: '',
    loading: false
  },
  reducers: {
  },
  extraReducers: {
    [fetchBlogs.pending]: (state, action) => {
      state.loading = true
    },
    [fetchBlogs.fulfilled]: (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
    },
    [fetchBlogs.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    }
  }
});


export default blogSlice.reducer;
