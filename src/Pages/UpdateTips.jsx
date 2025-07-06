import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import axios from 'axios';
import { GardenContext } from '../provider/GardenContext';
import Loading from './Loading';
import Swal from 'sweetalert2';

const UpdateTips = () => {
  const { user, loading } = useContext(GardenContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: '',
    topic: '',
    difficulty: 'Easy',
    category: 'Plant Care',
    availability: 'Public',
    imageUrl: '',
    description: '',
    userEmail: '',
    userName: '',
  });

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchTip = async () => {
      try {
        const res = await axios.get(`https://garden-hub-server-xi.vercel.app/api/updatetips/${id}`);
        const tip = res.data;

        setFormData({
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

        setIsFetching(false);
      } catch (error) {
        console.error(error);
        setIsFetching(false);
      }
    };

    fetchTip();
  }, [id, user]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      userEmail: user?.email || '',
      userName: user?.displayName || '',
    }));
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://garden-guidance-server.vercel.app/api/updatetips/${id}`, formData);

      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        icon: 'success',
        title: 'Update Successful',
      });

      navigate(`/sharetips/${user?.email}`);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: error.response?.data?.message || 'Please try again later.',
      });
    }
  };

  if (loading || isFetching) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-base-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="breadcrumbs text-sm mb-6 text-base-content/70">
            <ul>
              <li>
                <Link to="/" className="text-primary hover:text-primary-focus">Home</Link>
              </li>
              <li>
                <Link to={`/sharetips/${user?.email}`} className="text-primary hover:text-primary-focus">My Tips</Link>
              </li>
              <li className="text-base-content/60">Update Tip</li>
            </ul>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary dark:text-primary mb-4">
              Update Garden Tip
            </h1>
            <p className="text-lg text-base-content/70">
              Edit your gardening knowledge and keep the community updated
            </p>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered w-full"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="topic"
                  placeholder="Topic"
                  className="input input-bordered w-full"
                  value={formData.topic}
                  onChange={handleInputChange}
                  required
                />
                <select
                  name="difficulty"
                  className="select select-bordered w-full"
                  value={formData.difficulty}
                  onChange={handleInputChange}
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
                <select
                  name="category"
                  className="select select-bordered w-full"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="Plant Care">Plant Care</option>
                  <option value="Hydroponics">Hydroponics</option>
                  <option value="Composting">Composting</option>
                </select>
                <select
                  name="availability"
                  className="select select-bordered w-full"
                  value={formData.availability}
                  onChange={handleInputChange}
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Image URL"
                  className="input input-bordered w-full"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  className="textarea textarea-bordered w-full"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <button type="submit" className="btn btn-primary w-full">Update Tip</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTips;
