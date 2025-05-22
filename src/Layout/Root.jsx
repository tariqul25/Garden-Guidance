import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto bg-[#F5F5F5]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;