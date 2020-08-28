import React from 'react';
import { Image } from 'react-bootstrap';

const getRandomImageUrl = () => {
  const randomId = Math.ceil(Math.random() * 1000);
  return `url(https://picsum.photos/id/${randomId}/300/300)`;
};

const BlogItem = ({ title, description }) => {
  return (
    <div
      className="blog"
      style={{
        backgroundImage: getRandomImageUrl(),
      }}
    >
      <div className="blog__content">
        <div className="blog__tags">
          <span>Technical</span>
          <span>Sport</span>
          <span>Music</span>
        </div>
        <h3 className="blog__title">{title}</h3>
        <p className="blog__description">{description}</p>
        <p className="blog__author">
          <Image
            src="https://lh3.googleusercontent.com/ogw/ADGmqu-URLyBj13kt7eci2zIfwJD8sEi5O_bE25uZ4mA=s32-c-mo"
            roundedCircle
          />
          <span className="author">vuidoan</span>
          <span className="created-date"> - 20/5/2020 19:23:36</span>
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
