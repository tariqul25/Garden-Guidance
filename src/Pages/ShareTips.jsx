import React, { use } from "react";
import { GardenContext } from "../provider/GardenContext";

const ShareTips = () => {
    const {user}= use(GardenContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        data.userEmail = user?.email || "";
        data.userName = user?.displayName || "";

        console.log("Submitted Tip:", data);

        fetch('http://localhost:3000/api/sharetips', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data =>{
            console.log('after giving tips',data);
        })

        fetch('http://localhost:3000/api/gardeners')
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
        })



        // form.reset();
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-[##7BAF9E	] rounded-2xl shadow-lg my-6">
            <h2 className="text-2xl font-bold mb-6">Share a Garden Tips</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full p-2 border rounded-md"
                        placeholder="How I Grow Tomatoes Indoors"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium">Plant Type / Topic</label>
                    <input
                        type="text"
                        name="topic"
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium">Difficulty Level</label>
                    <select name="difficulty" className="w-full p-2 border rounded-md">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium">Category</label>
                    <select name="category" className="w-full p-2 border rounded-md">
                        <option value="Composting">Composting</option>
                        <option value="Plant Care">Plant Care</option>
                        <option value="Vertical Gardening">Vertical Gardening</option>
                        <option value="Organic Farming">Organic Farming</option>
                        <option value="Pest Control">Pest Control</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium">Availability</label>
                    <select name="availability" className="w-full p-2 border rounded-md">
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
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block font-medium">Description</label>
                    <textarea
                        name="description"
                        rows="4"
                        className="w-full p-2 border rounded-md"
                        required
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
    );
};

export default ShareTips;
