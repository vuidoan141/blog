import { createSlice } from '@reduxjs/toolkit';
import * as BlogApi from '../../api/BlogApi';
import { setLoading } from '../loader/LoaderSlice';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogs: [],
    error: '',
  },
  reducers: {
    fetchBlogRequest: (state) => {
    },
    fetchBlogSuccess: (state, action) => {
      state.blogs = action.payload;
    },
    fetchBlogFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchBlogs = () => async (dispatch) => {
  dispatch(fetchBlogRequest());
  dispatch(setLoading(true));
  try {
    const blogs = await BlogApi.fetchBlogs();
    setTimeout(() => dispatch(setLoading(false)), 300);
    dispatch(fetchBlogSuccess(blogs));
  } catch (err) {
    dispatch(fetchBlogFailure(err.message));
  }
};

export const {
  fetchBlogRequest,
  fetchBlogSuccess,
  fetchBlogFailure,
} = blogSlice.actions;
export default blogSlice.reducer;
