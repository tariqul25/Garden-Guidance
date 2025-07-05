import React from 'react';

const Categories = ({ trendingtips }) => {
  // Create a map to count how many tips per category
  const categoryMap = trendingtips.reduce((acc, tip) => {
    acc[tip.category] = (acc[tip.category] || 0) + 1;
    return acc;
  }, {});

  // Optional: Provide icons for known categories
  const categoryIcons = {
    'Indoor Plants': '🪴',
    Composting: '♻️',
    Hydroponics: '💧',
    'Herb Gardens': '🌿',
    'Vertical Gardens': '🏢',
    'Organic Farming': '🥕',
    'Flower Gardens': '🌸',
    'Vegetable Gardens': '🥬',
  };

  // Convert map to array for rendering
  const categories = Object.entries(categoryMap).map(([name, count]) => ({
    name,
    count,
    icon: categoryIcons[name] || '🌱', // default icon if none specified
  }));

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-base-content  font-bold mb-4">Popular Garden Categories</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Explore different gardening styles and find your passion
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="card-body items-center text-center py-6">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-base-content text-sm">{category.name}</h3>
                <p className="text-xs text-base-content/60">{category.count} tips</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
