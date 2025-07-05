import { Eye, Heart, TrendingUp } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const TopTrending = ({ trendingtips }) => {
  console.log(trendingtips);
  const trendstips = trendingtips.slice(0, 6);

  return (
    <section className="py-16 bg-base-200 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-base-content dark:text-base-content mb-4 flex items-center justify-center gap-2 a">
           <TrendingUp className="w-8 h-8 text-primary" />
            Top Trending Tips
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto dark:text-base-content/50">
            Discover the most popular gardening tips shared by our community this month
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendstips.map((tip) => (
            <div
              key={tip._id}
              className="card bg-base-100  shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <figure>
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-start mb-2">
                  <div
                    className={`badge badge-sm ${
                      tip.difficulty === 'Easy'
                        ? 'badge-success'
                        : tip.difficulty === 'Medium'
                        ? 'badge-warning'
                        : 'badge-error'
                    }`}
                  >
                    {tip.difficulty}
                  </div>
                  <div className="badge badge-outline badge-sm dark:border-gray-600 dark:text-gray-300">
                    {tip.category}
                  </div>
                </div>
                <h3 className="card-title text-lg line-clamp-2 dark:text-base-content">
                  {tip.title}
                </h3>
                <p className="text-sm text-base-content/70 line-clamp-3 dark:text-base-content/50">
                  {tip.description}
                </p>
                <div className="flex items-center justify-between mt-4 text-base-content dark:text-base-content/80">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-semibold">{tip.totalLiked} likes &nbsp; </span>
                  </div>
                  <p className="text-xs">{`by ${tip.userName}`}</p>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/alltips`}
                    className="btn btn-primary btn-sm dark:btn-primary"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopTrending;
