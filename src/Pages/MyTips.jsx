import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { GardenContext } from '../provider/GardenContext';
import Loading from './Loading';

const MyTips = () => {
  const mytips = useLoaderData();
  const { loading } = useContext(GardenContext);
  const [allTips, setAllTips] = useState(mytips);

  useEffect(() => {
    setAllTips(mytips);
  }, [mytips]);

  if (loading) {
    return <Loading />;
  }

  const handleTipsDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://garden-guidance-server.vercel.app/api/sharetips/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Your tip has been deleted",
                showConfirmButton: false,
                timer: 1500,
              });
              setAllTips(allTips.filter(tip => tip._id !== id));
            }
          });
      }
    });
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "badge-success";
      case "Medium": return "badge-warning";
      case "Hard": return "badge-error";
      default: return "badge-neutral";
    }
  };

  const getAvailabilityColor = (availability) => {
    return availability === "Public" ? "badge-primary" : "badge-neutral";
  };

  return (
    <div className="min-h-screen bg-base-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">My Garden Tips</h1>
              <p className="text-lg text-base-content/70">Manage your shared gardening knowledge</p>
            </div>
            <Link to="/share-tip" className="btn btn-primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Share New Tip
            </Link>
          </div>

          <div className="stats shadow mb-8 w-full">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="stat-title">Total Tips</div>
              <div className="stat-value text-primary">{allTips.length}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="stat-title">Public Tips</div>
              <div className="stat-value text-secondary">{allTips.filter(tip => tip.availability === 'Public').length}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-accent">{allTips.reduce((sum, tip) => sum + (tip.totalLikes || 0), 0)}</div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Difficulty</th>
                      <th>Status</th>
                      <th>Likes</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTips.map((tip) => (
                      <tr key={tip._id}>
                        <td>
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={tip.imageUrl}
                                alt={tip.title}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = 'https://via.placeholder.com/48';
                                }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="font-bold">{tip.title}</td>
                        <td>{tip.category}</td>
                        <td>
                          <div className={`badge ${getDifficultyColor(tip.difficulty)}`}>
                            {tip.difficulty}
                          </div>
                        </td>
                        <td>
                          <div className={`badge ${getAvailabilityColor(tip.availability)}`}>
                            {tip.availability}
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            {tip.totalLikes || 0}
                          </div>
                        </td>
                        <td>
                          <div className="flex gap-2">
                            <Link to={`/updatetips/${tip._id}`} className="btn btn-sm btn-outline btn-info">
                              Update
                            </Link>
                            <button
                              type="button"
                              onClick={() => handleTipsDelete(tip._id)}
                              className="btn btn-sm btn-outline btn-error"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {allTips.length === 0 && (
                <div className="text-center py-12">
                  <svg className="w-24 h-24 mx-auto text-base-content/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-base-content/60 mb-2">No tips shared yet</h3>
                  <p className="text-base-content/50 mb-4">Share your first gardening tip to help the community!</p>
                  <Link to="/share-tip" className="btn btn-primary">
                    Share Your First Tip
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTips;
