import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { GardenContext } from '../../provider/GardenContext';
import useAxios from '../../hooks/useAxios';

const DashBoard = () => {
  const { alltips, trendingtips, activegardeners } = useLoaderData();
  const { user } = useContext(GardenContext);
  const [mytips, setMyTips] = useState([]);
  const axiosSecure = useAxios(); // ✅ get your secure axios instance

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/api/sharetips/${user.email}`)
        .then((res) => setMyTips(res.data))
        .catch((error) => console.error('Error fetching my tips:', error));
    }
  }, [user, axiosSecure]);

  return (
    <div className="min-h-screen bg-base-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h1 className="text-4xl font-bold text-[#0F4C3A] dark:text-[#8CAD88]">Dashboard</h1>
        </div>
        <p className="text-base-content/70 mb-8 max-w-xl">
          Welcome back! Here's an overview of your gardening contributions.
        </p>

        {/* User Info Card */}
        <div className="card bg-gradient-to-r from-[#0F4C3A] to-[#8CAD88] text-white shadow-xl mb-8 rounded-lg">
          <div className="card-body">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-white ring-offset-4 ring-offset-base-100">
                  <img
                    src={user?.photoURL || 'https://via.placeholder.com/150'}
                    alt={user?.displayName || 'Gardener'}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">{user?.displayName}</h2>
                <p className="opacity-80 mb-2">{user?.email}</p>
                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                  <div>
                    <span className="text-sm opacity-70">Total Tips:</span>
                    <span className="font-semibold ml-1">{mytips.length}</span>
                  </div>
                  <div>
                    <span className="text-sm opacity-70">Total Contributions:</span>
                    <span className="font-semibold ml-1">{alltips.length}</span>
                  </div>
                </div>
              </div>
              <div>
                <Link to="/sharetips" className="btn btn-secondary">
                  Share New Tip
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="stat bg-base-200 shadow-lg rounded-lg p-4">
            <div className="stat-title">All Tips</div>
            <div className="stat-value text-[#0F4C3A] dark:text-[#8CAD88]">{alltips?.length}</div>
            <div className="stat-desc">Total tips on platform</div>
          </div>

          <div className="stat bg-base-200 shadow-lg rounded-lg p-4">
            <div className="stat-title">Trending Tips</div>
            <div className="stat-value text-[#38a169]">{trendingtips?.length}</div>
            <div className="stat-desc">Popular tips now</div>
          </div>

          <div className="stat bg-base-200 shadow-lg rounded-lg p-4">
            <div className="stat-title">Active Gardeners</div>
            <div className="stat-value text-[#d69e2e]">{activegardeners?.length}</div>
            <div className="stat-desc">Community members</div>
          </div>

          <div className="stat bg-base-200 shadow-lg rounded-lg p-4">
            <div className="stat-title">My Tips</div>
            <div className="stat-value text-[#3182ce]">{mytips?.length}</div>
            <div className="stat-desc">Tips you shared</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            to="/sharetips"
            className="card bg-[#0F4C3A] text-white shadow-xl rounded-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
          >
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Share New Tip</h3>
              <p>Help the community by sharing your gardening knowledge</p>
            </div>
          </Link>

          <Link
            to={`/sharetips/${user?.email}`}
            className="card bg-[#8CAD88] text-white shadow-xl rounded-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
          >
            <div className="card-body text-center">
              <h3 className="card-title justify-center">My Tips</h3>
              <p>Manage your shared gardening tips</p>
            </div>
          </Link>

          <Link
            to="/alltips"
            className="card bg-[#D4A574] text-white shadow-xl rounded-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
          >
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Browse Tips</h3>
              <p>Explore gardening tips from others</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
