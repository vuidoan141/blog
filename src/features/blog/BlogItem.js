import React from 'react';
import { Image } from 'react-bootstrap';

const BlogItem = ({title, description}) => {
  return (
    <div
      className="blog"
      style={{
        backgroundImage:
          'url(https://i.picsum.photos/id/923/1000/1000.jpg?hmac=2S7CTY3TZkTTH9iwsFQa7pg2tlNIPKqqZx6Ev6fhbbs)',
      }}
    >
      <div className="blog__content">
        <div className="blog__tags">
          <span>Technical</span>
          <span>Sport</span>
          <span>Music</span>
        </div>
        <h3 className="blog__title">{title}</h3>
        <p className="blog__description">
          {description}
        </p>
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
