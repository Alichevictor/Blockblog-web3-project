import React from 'react';
import {Outlet, Link } from 'react-router-dom';

// import data
import { navData } from './data';

const Nav = () => {
  return (
    <>
    <nav className='flex items-center'>
      <ul className='flex gap-x-8'>
        {navData.map((item, index) => {
          return (
            <li
              className='border-b-2 border-transparent hover:border-app-color transition-all duration-300'
              key={index}
            >
             
              <Link to={item.to}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
    <Outlet/>
    </>
  );
};

export default Nav;
