import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import '../../index.css'
import { GardenContext } from '../../provider/GardenContext';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, passSignOut } = use(GardenContext)
  // console.log(user.photoURL);
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
      console.log(error);
      alert('error')
    })
  }
  return (
    <div className=' bg-[#C8E6C9]'>
      <div className="navbar   w-11/12 mx-auto ">
        <div className="navbar-start">

          <img src="logo.png" className='w-10 rounded-2xl' alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <nav className="menu menu-horizontal px-1 gap-4">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/sharetips'>Share a Garden Tip</NavLink>
            <NavLink to='/allgardeners'>Explore Gardeners</NavLink>
            <NavLink to='/mytips'>My Tips</NavLink>
          </nav>
        </div>
        <div className="navbar-end">
          <Link className="btn" to='/register' >{user ? <p>Logout</p> : <p>Register</p>}</Link>
          {
            user &&
            <div className="dropdown dropdown-bottom flex items-center ml-3">
              <div tabIndex={0} role="button" className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                <img src={user?.photoURL} className="rounded-full w-9 h-9 cursor-pointer" alt="User" />
              </div>

              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-23">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li onClick={handlePassSignOut}><a>Sign Out</a></li>
              </ul>
            </div>
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;