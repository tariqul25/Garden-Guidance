import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { GardenContext } from '../../provider/GardenContext';

const DashBoard = () => {
    const { alltips, trendingtips, activegardeners } = useLoaderData();
    const { user } = use(GardenContext);
    const [mytips, setMyTips] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://garden-guidance-server.vercel.app/api/sharetips/${user.email}`)
                .then(res => res.json())
                .then(data => setMyTips(data));
        }
    }, [user]);

    return (
        <div>
            <div className="navbar sticky bg-green-50 top-0 w-full z-50 shadow-sm hidden md:block">
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

            <div className="grid grid-cols-2 gap-6 p-6">
                {/* Total Tips */}
                <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center gap-4 border border-gray-200">
                    <div>
                        <p className="text-gray-500">Total Tips Shared</p>
                        <h2 className="text-2xl font-bold">{alltips?.length}</h2>
                    </div>
                </div>

                {/* Total Likes */}
                <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center gap-4 border border-gray-200">
                    <div>
                        <p className="text-gray-500">Top Trending Tips</p>
                        <h2 className="text-2xl font-bold">{trendingtips?.length}</h2>
                    </div>
                </div>

                {/* Active Gardeners */}
                <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center gap-4 border border-gray-200">
                    <div>
                        <p className="text-gray-500">Active Gardeners</p>
                        <h2 className="text-2xl font-bold">{activegardeners?.length}</h2>
                    </div>
                </div>

                {/* My Tips Info */}
                <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center gap-4 border border-gray-200">
                    <div>
                        <p className="text-gray-500">My Tips</p>
                        {/* <h2 className="text-xl font-semibold">{user?.displayName}</h2> */}
                        <h2 className="text-xl font-bold"> {mytips?.length}</h2>
                    </div>
                </div>

            </div>
                 {/* My Tips Info */}
                <div className="bg-white shadow-lg rounded-2xl p-5 w-3/12 mx-auto flex items-center gap-4 border border-gray-200">
                    <div className='text-center'>
                        <p className="text-gray-500">Info</p>
                        <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                        <h2 className="text-xl font-bold"> {user?.email}</h2>
                    </div>
                </div>
        </div>
    );
};

export default DashBoard;
