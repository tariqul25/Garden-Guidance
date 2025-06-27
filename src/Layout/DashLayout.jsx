import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';

const DashLayout = () => {
    
    return (
        
        <div className="drawer lg:drawer-open">
            
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className="navbar bg-base-200 w-full lg:hidden">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>

                </div>
                {/* Page content here */}
                <Outlet></Outlet>
                {/* Page content here */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-green-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                     <p className='text-2xl font-bold mb-2'>GreenHaven</p>
                    <li className=''>
                        <NavLink to="/dashboard">
                            
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/alltips">
                       
                            All Tips
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/sharetips">
                            
                            Share Tips
                        </NavLink>
                    </li>
                 
                </ul>
            </div>
        </div>
    );
};

export default DashLayout;
