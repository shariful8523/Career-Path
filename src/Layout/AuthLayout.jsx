import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';

const AuthLayout = (props) => {
    return (
        
        <div>
            <header className='py-1 mx-auto '>
                 <Navbar></Navbar>
            </header>

          <section className='mt-20'>
              <Outlet></Outlet>
          </section>
          


        </div>
    );
};

export default AuthLayout;