import React, { useEffect } from 'react';
import BlogItem from './BlogItem';
import { fetchBlogs } from './BlogSlice';

import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from 'features/loader/LoaderSlice';

const BlogList = (props) => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.blog);
  const blogs = blogState.blogs;
  
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);
  
  useEffect(() => {
    dispatch(setLoading(blogState.loading));
  }, [blogState.loading])

  return (
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {blogs.map((blog) => (
        <BlogItem title={blog.title} description={blog.body} />
      ))}
    </div>
  );
};

export default BlogList;
