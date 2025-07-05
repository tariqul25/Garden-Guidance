import { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import { Eye, Heart, Filter } from 'lucide-react';

const AllTips = () => {
  const tips = useLoaderData();
  const [filteredTips, setFilteredTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterDifficulty, setFilterDifficulty] = useState('All');

  useEffect(() => {
    if (tips && tips.length) {
      setFilteredTips(tips);
      setLoading(false);
    }
  }, [tips]);

  useEffect(() => {
    if (!tips) return;
    if (filterDifficulty === 'All') {
      setFilteredTips(tips);
    } else {
      setFilteredTips(tips.filter(tip => tip.difficulty === filterDifficulty));
    }
  }, [tips, filterDifficulty]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-base-content font-bold mb-4">Browse Garden Tips</h1>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Discover expert gardening advice from our community of passionate gardeners
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="form-control">
            <label htmlFor="difficulty-filter" className="flex text-base-content items-center gap-2 cursor-pointer">
              <Filter className="w-4 h-4" />
              <span className="sr-only ">Filter by difficulty</span>
              <select
                id="difficulty-filter"
                className="select select-bordered"
                value={filterDifficulty}
                onChange={e => setFilterDifficulty(e.target.value)}
              >
                <option value="All">All Difficulty Levels</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
          </div>
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-base-content/70">
          Showing {filteredTips.length} tip{filteredTips.length !== 1 ? 's' : ''}
          {filterDifficulty !== 'All' && ` for ${filterDifficulty} difficulty`}
        </p>

        {/* Tips Table */}
        {filteredTips.length > 0 ? (
          <div className="overflow-x-auto bg-base-200 rounded-lg shadow-lg">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Difficulty</th>
                  <th>Likes</th>
                  <th>Author</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTips.map(tip => (
                  <tr key={tip._id} className="hover">
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle  w-12 h-12">
                          <img src={tip.imageUrl} alt={tip.title} loading="lazy" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold line-clamp-2 text-base-content max-w-xs">{tip.title}</div>
                    </td>
                    <td>
                      <div className="badge text-base-content badge-outline">{tip.category}</div>
                    </td>
                    <td>
                      <div
                        className={`badge ${
                          tip.difficulty === 'Easy'
                            ? 'badge-success'
                            : tip.difficulty === 'Medium'
                            ? 'badge-warning'
                            : 'badge-error'
                        }`}
                      >
                        {tip.difficulty}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-red-500" aria-label="Likes" />
                        <span className="font-semibold text-base-content">{tip.totalLiked}</span>
                      </div>
                    </td>
                    <td>
                      <div className="text-sm font-medium text-base-content">{tip.userName}</div>
                    </td>
                    <td>
                      <Link to={`/publictips/${tip._id}`} className="btn btn-primary btn-sm flex items-center gap-1">
                        <Eye className="w-4 h-4" aria-hidden="true" />
                        See More
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2">No tips found</h3>
            <p className="text-base-content/70">Try adjusting your filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTips;
