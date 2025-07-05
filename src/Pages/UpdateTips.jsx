import React, { use, useState } from 'react';
import { useLoaderData, useNavigate, Link } from 'react-router';
import { GardenContext } from '../provider/GardenContext';
import Loading from './Loading';
import Swal from 'sweetalert2';

const UpdateTips = () => {
  const { user, loading } = use(GardenContext);
  const navigate = useNavigate();
  const tip = useLoaderData();

  const [formData, setFormData] = useState({
    title: tip.title || '',
    topic: tip.topic || '',
    difficulty: tip.difficulty || 'Easy',
    category: tip.category || 'Plant Care',
    availability: tip.availability || 'Public',
    imageUrl: tip.imageUrl || '',
    description: tip.description || '',
    userEmail: user?.email || '',
    userName: user?.displayName || '',
  });

  if (loading) {
    return <Loading />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://garden-guidance-server.vercel.app/api/updatetips/${tip._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Update Successful',
        });
        navigate(`/sharetips/${user?.email}`);
      });
  };

  return (
    <div className="min-h-screen bg-base-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="breadcrumbs text-sm mb-6 text-base-content dark:text-base-content/70">
            <ul>
              <li>
                <Link to="/" className="text-primary hover:text-primary-focus">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/my-tips" className="text-primary hover:text-primary-focus">
                  My Tips
                </Link>
              </li>
              <li className="text-base-content/60 dark:text-base-content/40">Update Tip</li>
            </ul>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary dark:text-primary mb-4">
              Update Garden Tip
            </h1>
            <p className="text-lg text-base-content/70 dark:text-base-content/50">
              Edit your gardening knowledge and keep the community updated
            </p>
          </div>

          <div className="card bg-base-200 dark:bg-gray-800 shadow-xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content dark:text-base-content">
                        Title *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., How I Grow Tomatoes Indoors"
                      className="input input-bordered w-full bg-base-100 dark:bg-gray-700 text-base-content dark:text-base-content"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content dark:text-base-content">
                        Plant Type/Topic *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      placeholder="e.g., Tomatoes, Herbs, Succulents"
                      className="input input-bordered w-full bg-base-100 dark:bg-gray-700 text-base-content dark:text-base-content"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content dark:text-base-content">
                        Difficulty Level *
                      </span>
                    </label>
                    <select
                      name="difficulty"
                      value={formData.difficulty}
                      onChange={handleInputChange}
                      className="select select-bordered w-full bg-base-100 dark:bg-gray-700 text-base-content dark:text-base-content"
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content dark:text-base-content">
                        Category *
                      </span>
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="select select-bordered w-full bg-base-100 dark:bg-gray-700 text-base-content dark:text-base-content"
                    >
                      <option value="Plant Care">Plant Care</option>
                      <option value="Composting">Composting</option>
                      <option value="Vertical Gardening">Vertical Gardening</option>
                      <option value="Indoor Gardening">Indoor Gardening</option>
                      <option value="Organic Gardening">Organic Gardening</option>
                      <option value="Pest Control">Pest Control</option>
                      <option value="Soil Management">Soil Management</option>
                      <option value="Seasonal Care">Seasonal Care</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content dark:text-base-content">
                        Availability *
                      </span>
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="select select-bordered w-full bg-base-100 dark:bg-gray-700 text-base-content dark:text-base-content"
                    >
                      <option value="Public">Public</option>
                      <option value="Hidden">Hidden</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content dark:text-base-content">
                        Image URL
                      </span>
                    </label>
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                      className="input input-bordered w-full bg-base-100 dark:bg-gray-700 text-base-content dark:text-base-content"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content dark:text-base-content">
                      Description *
                    </span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Share your detailed gardening tip..."
                    className="textarea textarea-bordered h-32 w-full bg-base-100 dark:bg-gray-700 text-base-content dark:text-base-content"
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content dark:text-base-content">
                        User Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      value={formData.userEmail}
                      className="input input-bordered w-full bg-base-300 dark:bg-gray-600 text-base-content dark:text-base-content"
                      readOnly
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content dark:text-base-content">
                        User Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="userName"
                      value={formData.userName}
                      className="input input-bordered w-full bg-base-300 dark:bg-gray-600 text-base-content dark:text-base-content"
                      readOnly
                    />
                  </div>
                </div>

                <div className="form-control pt-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <button
                      type="submit"
                      className="btn btn-primary flex-1"
                    >
                      <svg
                        className="w-5 h-5 mr-2 inline-block"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Update Garden Tip
                    </button>
                    <Link
                      to="/my-tips"
                      className="btn btn-outline btn-neutral flex-1 text-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2 inline-block"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTips;
