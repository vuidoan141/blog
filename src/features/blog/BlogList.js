import React, { useEffect } from 'react';
import BlogItem from './BlogItem';
import {fetchBlogs} from './BlogSlice';

import { useDispatch, useSelector } from 'react-redux';

const BlogList = (props) => {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blog.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {blogs.map(blog => <BlogItem title={blog.title} description={blog.body}/>)}
    </div>
  );
};

export default BlogList;
