import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';


const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
          <div className='bg-base-100 '>
              <div className='w-11/12 mx-auto min-h-[calc(100vh-320px)] '>
                <Outlet></Outlet>
            </div>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;