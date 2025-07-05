import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { GardenContext } from '../../provider/GardenContext';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import { Menu, Sun, Moon, LogOut, User, Leaf } from 'lucide-react';

const Navbar = () => {
  const { user, passSignOut } = useContext(GardenContext);
  const location = useLocation();

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleToogle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  const handlePassSignOut = () => {
    passSignOut()
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Sign out successful!',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire('Error', 'Failed to sign out.', 'error');
      });
  };

  const isActive = (path) => location.pathname === path;

  // Hex colors from your config:
  const colors = {
    primary: '#0F4C3A',
    primaryFocus: '#0a3529',
    primaryContent: '#ffffff',
    secondary: '#8CAD88',
    secondaryFocus: '#7a9c76',
    secondaryContent: '#ffffff',
    base100Light: '#ffffff',
    base100Dark: '#1a202c',
    baseContentLight: '#1a202c',
    baseContentDark: '#f7fafc',
    neutralLight: '#2D3748',
    neutralDark: '#1A202C',
    neutralContentLight: '#ffffff',
    neutralContentDark: '#ffffff',
  };

  return (
    <div style={{
        backgroundColor: theme === 'light' ? colors.primary : colors.secondary,
        color: colors.primaryContent,
      }} >
      <div
      className="sticky top-0 z-50   max-w-7xl mx-auto p-3 flex items-center justify-between"
      
    >
      {/* Navbar Start */}
      <div className="flex items-center gap-2">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
            style={{
              color: colors.primaryContent,
            }}
          >
            <Menu className="h-5 w-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            style={{
              backgroundColor: theme === 'light' ? colors.base100Light : colors.base100Dark,
              color: theme === 'light' ? colors.baseContentLight : colors.baseContentDark,
            }}
          >
            <li>
              <Link
                to="/"
                className={isActive('/') ? 'font-bold' : ''}
                style={{
                  backgroundColor: isActive('/') ? colors.primaryFocus : 'transparent',
                  borderRadius: '0.5rem',
                  padding: '0.25rem 0.75rem',
                  color: isActive('/') ? colors.primaryContent : undefined,
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sharetips"
                className={isActive('/sharetips') ? 'font-bold' : ''}
                style={{
                  backgroundColor: isActive('/sharetips') ? colors.primaryFocus : 'transparent',
                  borderRadius: '0.5rem',
                  padding: '0.25rem 0.75rem',
                  color: isActive('/sharetips') ? colors.primaryContent : undefined,
                }}
              >
                Share Tips
              </Link>
            </li>
            <li>
              <Link
                to="/alltips"
                className={isActive('/alltips') ? 'font-bold' : ''}
                style={{
                  backgroundColor: isActive('/alltips') ? colors.primaryFocus : 'transparent',
                  borderRadius: '0.5rem',
                  padding: '0.25rem 0.75rem',
                  color: isActive('/alltips') ? colors.primaryContent : undefined,
                }}
              >
                Browse Tips
              </Link>
            </li>
            <li>
              <Link
                to="/allgardeners"
                className={isActive('/allgardeners') ? 'font-bold' : ''}
                style={{
                  backgroundColor: isActive('/allgardeners') ? colors.primaryFocus : 'transparent',
                  borderRadius: '0.5rem',
                  padding: '0.25rem 0.75rem',
                  color: isActive('/allgardeners') ? colors.primaryContent : undefined,
                }}
              >
                Explore Gardeners
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className={isActive('/dashboard') ? 'font-bold' : ''}
                    style={{
                      backgroundColor: isActive('/dashboard') ? colors.primaryFocus : 'transparent',
                      borderRadius: '0.5rem',
                      padding: '0.25rem 0.75rem',
                      color: isActive('/dashboard') ? colors.primaryContent : undefined,
                    }}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/sharetips/${user?.email}`}
                    className={isActive(`/sharetips/${user?.email}`) ? 'font-bold' : ''}
                    style={{
                      backgroundColor: isActive(`/sharetips/${user?.email}`) ? colors.primaryFocus : 'transparent',
                      borderRadius: '0.5rem',
                      padding: '0.25rem 0.75rem',
                      color: isActive(`/sharetips/${user?.email}`) ? colors.primaryContent : undefined,
                    }}
                  >
                    My Tips
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl"
          style={{ color: colors.primaryContent }}
        >
          <Leaf className="w-6 h-6" />
          GreenHaven
        </Link>
      </div>

      {/* Navbar Center (large screens) */}
      <div className="hidden lg:flex">
        <ul className="flex gap-1 px-1">
          {['/', '/sharetips', '/alltips', '/allgardeners'].map((path, i) => {
            const labels = ['Home', 'Share Tips', 'Browse Tips', 'Explore Gardeners'];
            return (
              <li key={i}>
                <Link
                  to={path}
                  className="rounded-lg px-3 py-1"
                  style={{
                    backgroundColor: isActive(path) ? colors.primaryFocus : 'transparent',
                    color: isActive(path) ? colors.primaryContent : colors.primaryContent,
                  }}
                >
                  {labels[i]}
                </Link>
              </li>
            );
          })}
          {user && (
            <>
              <li>
                <Link
                  to="/dashboard"
                  className="rounded-lg px-3 py-1"
                  style={{
                    backgroundColor: isActive('/dashboard') ? colors.primaryFocus : 'transparent',
                    color: isActive('/dashboard') ? colors.primaryContent : colors.primaryContent,
                  }}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to={`/sharetips/${user?.email}`}
                  className="rounded-lg px-3 py-1"
                  style={{
                    backgroundColor: isActive(`/sharetips/${user?.email}`) ? colors.primaryFocus : 'transparent',
                    color: isActive(`/sharetips/${user?.email}`) ? colors.primaryContent : colors.primaryContent,
                  }}
                >
                  My Tips
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleToogle}
          className="btn btn-ghost btn-circle"
          style={{ color: colors.primaryContent }}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        {user ? (
          <div className="dropdown dropdown-end relative">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" style={{ color: colors.primaryContent }}>
              <div className="w-10 rounded-full overflow-hidden">
                <img src={user?.photoURL || 'https://via.placeholder.com/40'} alt="User" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52"
              style={{
                backgroundColor: theme === 'light' ? colors.base100Light : colors.base100Dark,
                color: theme === 'light' ? colors.baseContentLight : colors.baseContentDark,
              }}
            >
              <li className="font-semibold p-2">{user?.displayName}</li>
              <li>
                <a
                  onClick={handlePassSignOut}
                  className="flex items-center gap-2 cursor-pointer"
                  style={{ color: theme === 'light' ? colors.baseContentLight : colors.baseContentDark }}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/register"
            className="btn btn-secondary flex gap-2 items-center"
            style={{
              backgroundColor: colors.secondary,
              color: colors.secondaryContent,
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <User className="w-4 h-4" />
            Register
          </Link>
        )}
      </div>

      <Tooltip id="my-tooltip" place="top" />
    </div>
    </div>
  );
};

export default Navbar;
