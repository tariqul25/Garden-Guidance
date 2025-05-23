import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const MyTips = () => {
    const mytips =useLoaderData()
    //  console.log(mytips);
    const handleTipsDelete=(id)=>{

    }
    return (
         <div className="m-8 overflow-x-auto">
            <table className="table-auto w-full border border-collapse text-center">
                {/* head */}
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">No</th>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Topic</th>
                        <th className="px-4 py-2">Difficulity</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Update</th>
                        <th className="px-4 py-2">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mytips.map((tips,index) => (
                            <tr key={tips._id} className="hover:bg-gray-50">
                                <td className="px-4 py-2">{index+1}</td>
                                <td className="px-4 py-2">{tips.title}</td>
                                <td className="px-4 py-2">{tips.category}</td>
                                <td className="px-4 py-2">{tips.topic}</td>
                                <td className="px-4 py-2">{tips.difficulty}</td>
                                <td className="px-4 py-2">
                                    <img
                                        className="w-12 h-12 object-cover mx-auto rounded-full"
                                        src={tips?.imageUrl}
                                        alt={tips.title}
                                    />
                                </td>
                                <td className="px-4 py-2">
                                  <Link to={`/updatetips/${tips._id}`}><button tips={tips} className='btn btn-ghost btn-xs'>Update</button></Link>
                                </td>
                                <td className="px-4 py-2">
                                   <button onClick={()=>handleTipsDelete(tips._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyTips;