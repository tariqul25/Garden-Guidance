import { Eye, Heart, TrendingUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import axiosInstance from '../hooks/axiosInstance';
import Loading from './Loading'; // ✅ if you have one

const TopTrending = () => {
  const [trendingTips, setTrendingTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get('/api/top-trending')
      .then(res => {
        setTrendingTips(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch trending tips:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  // const trendstips = trendingTips.slice(0, 6);

  return (
    <section className="py-16 bg-base-200 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-base-content mb-4 flex items-center justify-center gap-2">
            <TrendingUp className="w-8 h-8 text-primary" />
            Top Trending Tips
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Discover the most popular gardening tips shared by our community this month
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingTips.map((tip) => (
            <div
              key={tip._id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <figure>
                <img
                  src={tip.imageUrl}
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
                  <div className="badge badge-outline badge-sm text-base-content">
                    {tip.category}
                  </div>
                </div>
                <h3 className="card-title text-lg line-clamp-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-base-content/70 line-clamp-3">
                  {tip.description}
                </p>
                <div className="flex items-center justify-between mt-4 text-base-content">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-semibold">
                      {tip.totalLiked} likes &nbsp;
                    </span>
                  </div>
                  <p className="text-xs">{`by ${tip.userName}`}</p>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/alltips`}
                    className="btn btn-primary btn-sm"
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
