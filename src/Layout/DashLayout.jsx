import React, { use } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { GardenContext } from '../provider/GardenContext';
import { Leaf } from 'lucide-react';

const DashLayout = () => {
  const { user } = use(GardenContext)
  const colors = {
    primary: '#0F4C3A',
    secondary: '#8CAD88',
    baseContent: '#f7fafc', // white-ish text
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Navbar for mobile */}
        <div className="navbar bg-[#e2e8f0] w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="Open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
                stroke={colors.primary}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 font-semibold text-[#0F4C3A]">Dashboard</div>
        </div>

        {/* Page content */}
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="Close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className="menu min-h-full w-80 p-4"
          style={{
            background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`,
            color: colors.baseContent,
          }}
        >
          <div className='flex items-center'>
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl"
              style={{ color: colors.primaryContent }}
            >
              <Leaf className="w-6 h-6" />
              GardenHub
            </Link>
          </div>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'bg-[#8CAD88] text-[#0F4C3A] font-bold rounded-md'
                  : 'hover:bg-[#699b6a] hover:text-white rounded-md'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'bg-[#8CAD88] text-[#0F4C3A] font-bold rounded-md'
                  : 'hover:bg-[#699b6a] hover:text-white rounded-md'
              }
            >
              DashBoard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/alltips"
              className={({ isActive }) =>
                isActive
                  ? 'bg-[#8CAD88] text-[#0F4C3A] font-bold rounded-md'
                  : 'hover:bg-[#699b6a] hover:text-white rounded-md'
              }
            >
              All Tips
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/sharetips/${user?.email}`}
              className={({ isActive }) =>
                isActive
                  ? 'bg-[#8CAD88] text-[#0F4C3A] font-bold rounded-md'
                  : 'hover:bg-[#699b6a] hover:text-white rounded-md'
              }
            >
              All Tips
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default DashLayout;
