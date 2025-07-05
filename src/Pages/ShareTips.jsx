import React, { useState, useEffect, useContext } from "react";
import { GardenContext } from "../provider/GardenContext";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router";
import Loading from "./Loading";

const ShareTips = () => {
  const { user, loading } = useContext(GardenContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    plantType: "",
    difficulty: "Easy",
    category: "Plant Care",
    availability: "Public",
    imageUrl: "",
    description: "",
    userEmail: "",
    userName: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        userEmail: user.email || "",
        userName: user.displayName || "",
      }));
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://garden-guidance-server.vercel.app/api/sharetips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Tip shared successfully!",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/alltips");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
        });
      });
  };

  return (
    <div className="min-h-screen bg-base-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary dark:text-primary-content mb-4">
              Share a Garden Tip
            </h1>
            <p className="text-lg text-base-content/70 dark:text-base-content/40">
              Help fellow gardeners by sharing your knowledge and experience
            </p>
          </div>

          <div className="card bg-base-200 dark:bg-gray-800 shadow-xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label dark:text-gray-300">
                      <span className="label-text font-semibold dark:text-gray-300">
                        Title *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., How I Grow Tomatoes Indoors"
                      className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label dark:text-gray-300">
                      <span className="label-text font-semibold dark:text-gray-300">
                        Plant Type/Topic *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="plantType"
                      value={formData.plantType}
                      onChange={handleInputChange}
                      placeholder="e.g., Tomatoes, Herbs, Succulents"
                      className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label dark:text-gray-300">
                      <span className="label-text font-semibold dark:text-gray-300">
                        Difficulty Level *
                      </span>
                    </label>
                    <select
                      name="difficulty"
                      value={formData.difficulty}
                      onChange={handleInputChange}
                      className="select select-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label dark:text-gray-300">
                      <span className="label-text font-semibold dark:text-gray-300">
                        Category *
                      </span>
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="select select-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
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
                    <label className="label dark:text-gray-300">
                      <span className="label-text font-semibold dark:text-gray-300">
                        Availability *
                      </span>
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="select select-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    >
                      <option value="Public">Public</option>
                      <option value="Hidden">Hidden</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label dark:text-gray-300">
                      <span className="label-text font-semibold dark:text-gray-300">
                        Image URL
                      </span>
                    </label>
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                      className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label dark:text-gray-300">
                    <span className="label-text font-semibold dark:text-gray-300">
                      Description *
                    </span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Add details, steps, and helpful tips..."
                    className="textarea textarea-bordered h-32 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label dark:text-gray-300">
                      <span className="label-text font-semibold dark:text-gray-300">
                        User Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      value={formData.userEmail}
                      className="input input-bordered w-full bg-base-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                      readOnly
                    />
                  </div>

                  <div className="form-control">
                    <label className="label dark:text-gray-300">
                      <span className="label-text font-semibold dark:text-gray-300">
                        User Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="userName"
                      value={formData.userName}
                      className="input input-bordered w-full bg-base-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                      readOnly
                    />
                  </div>
                </div>

                <div className="form-control pt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg dark:btn-primary"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Share Garden Tip
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareTips;
