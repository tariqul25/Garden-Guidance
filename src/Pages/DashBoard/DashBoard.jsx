import React from 'react';
import { Link } from 'react-router';

const DashBoard = ({stats}) => {
    return (
        <div>
            <div className="navbar sticky bg-green-50 top-0 w-full  z-50 shadow-sm hidden md:block">
                <div className="w-11/12 mx-auto flex justify-between items-center">
                    <div className="navbar-start">

                        <p className='text-2xl font-bold'>GreenHaven</p>
                    </div>
                    <div className="navbar-center font-bold hidden lg:flex">
                        Dashboard
                    </div>
                    <div className="navbar-end">
                        <Link to='/'><button className='btn bg-green-400'>Back to Home</button></Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2  gap-6 p-6">
                {/* Total Tips */}
                <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center gap-4 border border-gray-200">
                    {/* <FaRegLightbulb className="text-yellow-500 text-3xl" /> */}
                    <div>
                        <h2 className="text-2xl font-bold">{stats?.totalTips}</h2>
                        <p className="text-gray-500">Total Tips Shared</p>
                    </div>
                </div>

                {/* Total Likes */}
                <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center gap-4 border border-gray-200">
                    {/* <FaHeart className="text-red-500 text-3xl" /> */}
                    <div>
                        <h2 className="text-2xl font-bold">{stats?.totalLikes}</h2>
                        <p className="text-gray-500">Total Likes</p>
                    </div>
                </div>

                {/* User Rank */}
                <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center gap-4 border border-gray-200">
                    {/* <FaMedal className="text-blue-500 text-3xl" /> */}
                    <div>
                        <h2 className="text-2xl font-bold">{stats?.rank}</h2>
                        <p className="text-gray-500">User Rank</p>
                    </div>
                </div>

                {/* Followers */}
                <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center gap-4 border border-gray-200">
                    {/* <FaUsers className="text-green-600 text-3xl" /> */}
                    <div>
                        <h2 className="text-2xl font-bold">{stats?.followers}</h2>
                        <p className="text-gray-500">Followers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;