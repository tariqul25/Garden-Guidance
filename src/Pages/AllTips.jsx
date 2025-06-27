import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';

const AllTips = () => {
    const tipsData = useLoaderData();
    console.log(tipsData);
    const [filteredTips, setFilteredTips] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); // or 'desc'
    const [sortField, setSortField] = useState('title');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // get all unique categories
    const categories = ['All', ...new Set(tipsData.map(tip => tip.category))];
    console.log(categories)

    useEffect(() => {
        let data = [...tipsData];
 
        // Filter
        if (selectedCategory !== 'All') {
            data = data.filter(tip => tip.category === selectedCategory);
        }

        // Sort
        data.sort((a, b) => {
            const valA = a[sortField].toLowerCase();
            const valB = b[sortField].toLowerCase();
            if (sortOrder === 'asc') return valA.localeCompare(valB);
            else return valB.localeCompare(valA);
        });

        setFilteredTips(data);
    }, [tipsData, sortField, sortOrder, selectedCategory]);

    return (
        <div className="py-12 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <div>
                    <label className="mr-2 font-medium">Filter by Category:</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="select select-bordered"
                    >
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="flex gap-4">
                    <div>
                        <label className="mr-2 font-medium">Sort By:</label>
                        <select
                            value={sortField}
                            onChange={(e) => setSortField(e.target.value)}
                            className="select select-bordered"
                        >
                            <option value="title">Title</option>
                            <option value="category">Category</option>
                        </select>
                    </div>
                    <div>
                        <label className="mr-2 font-medium">Order:</label>
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="select select-bordered"
                        >
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full border-collapse text-center">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2">Title</th>
                            <th className="border px-4 py-2">Category</th>
                            <th className="border px-4 py-2">Image</th>
                            <th className="border px-4 py-2">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTips.map(tip => (
                            <tr key={tip._id} className="hover:bg-gray-50">
                                <td className="border px-4 py-2">{tip.title}</td>
                                <td className="border px-4 py-2">{tip.category}</td>
                                <td className="border px-4 py-2">
                                    <img
                                        src={tip.imageUrl}
                                        alt={tip.title}
                                        className="w-12 h-12 rounded-full object-cover mx-auto"
                                    />
                                </td>
                                <td className="border px-4 py-2">
                                    <Link to={`/publictips/${tip._id}`}>
                                        <button className="btn btn-xs btn-primary">Details</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTips;
