import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { GardenContext } from '../provider/GardenContext';
import useAxios from '../hooks/useAxios'; 
import Loading from './Loading';

const TipsDetails = () => {
  const { id } = useParams(); // get tip ID from URL
  const axiosSecure = useAxios();
  const { like, setLike } = useContext(GardenContext);
  const [click, setClick] = useState(false);
  const [gardener, setGardener] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the tip details on mount or when id changes
  useEffect(() => {
    if (!id) return;

    setLoading(true);
    axiosSecure.get(`/api/publictips/${id}`)
      .then(res => {
        setGardener(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch tip details:', err);
        setLoading(false);
      });
  }, [axiosSecure, id]);

  const handleLikeBtn = () => {
    if (click) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setClick(!click);
  };

  if (loading) return <Loading />;

  if (!gardener) return (
    <div className="min-h-screen flex items-center justify-center text-base-content">
      <p>Tip details not found.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-base-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-0">
          {/* Breadcrumb */}
          <div className="breadcrumbs text-sm mb-6 text-base-content/70 dark:text-base-content/40">
            <ul>
              <li>
                <Link to="/" className="text-primary hover:text-primary-focus dark:hover:text-primary-focus">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/alltips" className="text-primary hover:text-primary-focus dark:hover:text-primary-focus">
                  Browse Tips
                </Link>
              </li>
              <li className="text-base-content">{gardener.title}</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="card bg-base-200 shadow-xl">
            <figure className="relative">
              <img
                src={gardener.imageUrl}
                alt={gardener.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute top-4 right-4">
                <div className="badge badge-outline text-base-content badge-lg">{gardener.difficulty}</div>
              </div>
            </figure>

            <div className="card-body">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{gardener.title}</h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="badge badge-outline badge-lg text-base-content">{gardener.category}</div>
                    <div className="badge badge-outline badge-lg text-base-content">{gardener.topic}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={handleLikeBtn}
                    className={`btn btn-circle ${click ? 'btn-error' : 'btn-outline btn-error'}`}
                    aria-label="Like button"
                  >
                    <svg
                      className="w-6 h-6"
                      fill={click ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary dark:text-primary-content">{like}</div>
                    <div className="text-xs text-base-content/60 dark:text-base-content/40">likes</div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="prose prose-lg max-w-none dark:prose-invert text-base-content">
                <p>{gardener.description}</p>
              </div>

              {/* Actions */}
              <div className="card-actions justify-center mt-8 pt-6 border-t border-base-300 dark:border-gray-700">
                <Link
                  to="/alltips"
                  className="btn btn-outline btn-primary dark:text-primary-content dark:border-primary dark:hover:bg-primary"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Browse Tips
                </Link>
                <Link to="/sharetips" className="btn btn-primary dark:btn-primary">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Share Your Tip
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsDetails;
