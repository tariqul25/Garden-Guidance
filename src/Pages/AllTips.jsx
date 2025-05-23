import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllTips = () => {
    const alltips = useLoaderData();

    return (
        <div className="m-8 overflow-x-auto">
            <table className="table-auto w-full border border-collapse text-center">
                {/* head */}
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">See More</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alltips.map(tips => (
                            <tr key={tips._id} className="hover:bg-gray-50">
                                <td className="px-4 py-2">{tips.title}</td>
                                <td className="px-4 py-2">{tips.category}</td>
                                <td className="px-4 py-2">
                                    <img
                                        className="w-12 h-12 object-cover mx-auto rounded-full"
                                        src={tips.imageUrl}
                                        alt={tips.title}
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <Link to={`/publictips/${tips._id}`}> <button className="btn btn-ghost btn-xs">See More</button></Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
};

export default AllTips;
