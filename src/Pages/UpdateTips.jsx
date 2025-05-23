import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { GardenContext } from '../provider/GardenContext';
import Loading from './Loading';

const UpdateTips = () => {
    const { user,loading } = use(GardenContext)
    const tip = useLoaderData()
    if(loading){
            return <Loading></Loading>
        }
    //  console.log(tip);
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const updatedTips = Object.fromEntries(formData.entries())
        //  console.log(updatedTips);
        //  console.log(tip._id);
        fetch(`http://localhost:3000/api/updatetips/${tip._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedTips)
        })
        .then(res => res.json())
            .then(data => {
                //  console.log('updatated data', data);
            })
    }
    return (
        <div>

            <div className="max-w-4xl mx-auto p-6 bg-[##7BAF9E	] rounded-2xl shadow-lg my-6">
                <h2 className="text-2xl font-bold mb-6">Update Your Tips</h2>
                <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            className="w-full p-2 border rounded-md"
                            placeholder="How I Grow Tomatoes Indoors"
                            defaultValue={tip.title}
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Plant Type / Topic</label>
                        <input
                            type="text"
                            name="topic"
                            className="w-full p-2 border rounded-md"
                            defaultValue={tip.topic}
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Difficulty Level</label>
                        <select name="difficulty" className="w-full p-2 border rounded-md" defaultValue={tip.difficulty}>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">Category</label>
                        <select name="category" className="w-full p-2 border rounded-md " defaultValue={tip.category}>
                            <option value="Composting">Composting</option>
                            <option value="Plant Care">Plant Care</option>
                            <option value="Vertical Gardening">Vertical Gardening</option>
                            <option value="Organic Farming">Organic Farming</option>
                            <option value="Pest Control">Pest Control</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">Availability</label>
                        <select name="availability" className="w-full p-2 border rounded-md " defaultValue={tip.availability}>
                            <option value="Public">Public</option>
                            <option value="Hidden">Hidden</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">Images URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            className="w-full p-2 border rounded-md"
                            placeholder="https://example.com/image.jpg"
                            defaultValue={tip.imageUrl}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block font-medium">Description</label>
                        <textarea
                            name="description"
                            rows="4"
                            className="w-full p-2 border rounded-md"
                            required
                            defaultValue={tip.description}
                        ></textarea>
                    </div>

                    <div>
                        <label className="block font-medium">User Email</label>
                        <input
                            type="email"
                            value={user?.email || ""}
                            readOnly
                            className="w-full p-2 bg-gray-100 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">User Name</label>
                        <input
                            type="text"
                            value={user?.displayName || ""}
                            readOnly
                            className="w-full p-2 bg-gray-100 border rounded-md"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-xl"
                        >
                            Submit Tip
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateTips;