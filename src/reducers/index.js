import {combineReducers} from 'redux';
import loaderReducer from '../features/loader/LoaderSlice';
import blogReducer from '../features/blog/BlogSlice';

const rootReducer = combineReducers({
  loader: loaderReducer,
  blog: blogReducer
});

export default rootReducer;