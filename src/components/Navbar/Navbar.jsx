import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import '../../index.css'
import { GardenContext } from '../../provider/GardenContext';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const { user, passSignOut } = use(GardenContext)
  //  console.log(user);

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  const handleToogle = (e) => {
    if (e.target.checked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])


  const handlePassSignOut = (e) => {
    e.preventDefault()
    passSignOut().then(result => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign out",
        showConfirmButton: false,
        timer: 1500
      });
    }).catch(error => {
      //  console.log(error);
      alert('error')
    })
  }
  return (
 
      <div className="navbar sticky bg-green-400 top-0 w-full  z-50 shadow-md">
        <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className="navbar-start">

          <p className='text-2xl font-bold'>GreenHaven</p>  
        </div>
        <div className="navbar-center hidden lg:flex">
          <nav className="menu menu-horizontal px-1 gap-4">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/sharetips'>Share Tips</NavLink>
            <NavLink to='/alltips'>Browse Tips</NavLink>
            <NavLink to='/allgardeners'>Explore Gardeners</NavLink>
            <NavLink to={`/sharetips/${user?.email}`}>My Tips</NavLink>
          </nav>
        </div>
        <div className="navbar-end">
         <div className='flex gap-2'>
 <Link className="btn bg-green-300" to='/register' >{user ? <p>Logout</p> : <p>Register</p>}</Link>

            <Link to='/dashboard'><button className='btn btn-md bg-green-300'>Dashboard</button></Link>
         </div>
          <div className="flex justify-center items-center">
            <input
              type="checkbox"
              defaultChecked
              className="toggle ml-1"
              onChange={handleToogle}
            />
          </div>
          {
            user &&
            <div className="dropdown dropdown-bottom dropdown-left flex items-center ml-3">
              <div tabIndex={0} role="button" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} >
                <img src={user?.photoURL} className="rounded-full w-9 h-9 cursor-pointer" alt="User" />
              </div>


              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-26">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li onClick={handlePassSignOut}><a className='dark:text-white'>Sign Out</a></li>
              </ul>
            </div>
          }
          <Tooltip id="my-tooltip" place="top" />
        </div>
        </div>
      </div>

  );
};

export default Navbar;