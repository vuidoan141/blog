import React from 'react';
import { NavLink } from 'react-router-dom';
import useScroll from '../hooks/useScroll';
import { Image } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Blog', path: '/blogs' },
  { title: 'Contact Us', path: '/contact-us' },
  { title: 'Login', path: '/login' },
];

const Navigation = () => {
  const isScrolled = useScroll(100);
  const [active, setActive] = useState(false);
  return (
    <nav className={`top-navigation p-0 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-xl nav-container">
        <NavLink to="/" className="logo">
          V-Blogs
        </NavLink>
        <div className={`menu${active ? ' active' : ''}`}>
          <ul>
            {navLinks.map((e, i) => (
              <li>
                <NavLink to={e.path}>{e.title}</NavLink>
              </li>
            ))}
          </ul>
          <Image
            src="https://lh3.googleusercontent.com/ogw/ADGmqu-URLyBj13kt7eci2zIfwJD8sEi5O_bE25uZ4mA=s32-c-mo"
            roundedCircle
          />
        </div>
        <div className={`nav-icon${active ? ' active' : ''}`} onClick={() => setActive(!active)}>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
