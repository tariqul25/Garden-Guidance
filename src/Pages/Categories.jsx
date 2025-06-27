import React from 'react';

const Categories = ({ trendingtips }) => {
    const uniqueCategoryTips = [];
    const categoryList = [];

    for (const tip of trendingtips) {
        if (!categoryList.includes(tip.category)) {
            categoryList.push(tip.category);
            uniqueCategoryTips.push(tip);
        }
    }

    return (
        <div className="pt-16">
            <div className="px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Categories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {uniqueCategoryTips.map((tip, i) => (
                        <div
                            key={i}
                            className="bg-[#FDF8F3] p-6 rounded-2xl shadow-md text-center"
                        >
                            <img
                                src={tip.image}
                                alt={tip.category}
                                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">
                                {tip.category}
                            </h3>
                            <p className="text-pink-600">{tip.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
