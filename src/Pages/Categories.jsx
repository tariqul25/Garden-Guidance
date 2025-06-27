import React from 'react';

const Categories = ({trendingtips}) => {
    console.log(trendingtips);
    const allTips = trendingtips.slice(0, 6);

    return (
        <div className="py-16 ">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Categories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allTips.map((tips, i) => (
                        <div
                            key={i}
                            className="bg-[#FDF8F3] p-6 rounded-2xl shadow-md text-center"
                        >
                            <img
                                src={tips.image}
                                alt={tips.name}
                                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">
                                {tips.expertise}
                            </h3>
                            <p className="text-pink-600">{tips.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
