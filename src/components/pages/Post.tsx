"use client";

import React, { useState } from "react";

const Post: React.FC = () => {
  const [formData, setFormData] = useState({
    influencerUuid: "",
    influencerName: "",
    title: "",
    content: "",
    numberOfEventParticipants: 0,
    localName: "",
    eventPlace: "",
    eventStartTime: "",
    eventCloseTime: "",
    auctionStartTime: "",
    startPrice: 0,
    incrementUnit: 0,
    thumbnail: "",
    images: [""],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      images: [value], // Assuming you handle only one image URL for simplicity
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
    // try {
    //   const response = await axios.post('your-api-endpoint', formData);
    //   console.log('Response:', response.data);
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full max-w-lg mx-auto"
    >
      <div className="flex justify-between w-full mb-4 mt-8">
        <input
          type="text"
          name="influencerUuid"
          value={formData.influencerUuid}
          onChange={handleChange}
          placeholder="Influencer UUID"
          className="w-2/5 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="influencerName"
          value={formData.influencerName}
          onChange={handleChange}
          placeholder="Influencer Name"
          className="w-3/5 px-3 py-2 ml-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full px-3 py-2 mb-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
        className="w-full h-32 px-3 py-2 mb-4 border rounded-md border-gray-300 resize-none focus:outline-none focus:border-blue-500"
      ></textarea>
      <div className="flex justify-between w-full mb-4">
        <input
          type="number"
          name="numberOfEventParticipants"
          value={formData.numberOfEventParticipants}
          onChange={handleChange}
          placeholder="Number of Event Participants"
          className="w-1/3 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          name="startPrice"
          value={formData.startPrice}
          onChange={handleChange}
          placeholder="Start Price"
          className="w-1/3 px-3 py-2 ml-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          name="incrementUnit"
          value={formData.incrementUnit}
          onChange={handleChange}
          placeholder="Increment Unit"
          className="w-1/3 px-3 py-2 ml-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex justify-between w-full mb-4">
        <input
          type="text"
          name="localName"
          value={formData.localName}
          onChange={handleChange}
          placeholder="Local Name"
          className="w-1/2 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="eventPlace"
          value={formData.eventPlace}
          onChange={handleChange}
          placeholder="Event Place"
          className="w-1/2 px-3 py-2 ml-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex justify-between w-full mb-4">
        <input
          type="datetime-local"
          name="eventStartTime"
          value={formData.eventStartTime}
          onChange={handleChange}
          placeholder="Event Start Time"
          className="w-1/3 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="datetime-local"
          name="eventCloseTime"
          value={formData.eventCloseTime}
          onChange={handleChange}
          placeholder="Event Close Time"
          className="w-1/3 px-3 py-2 ml-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="datetime-local"
          name="auctionStartTime"
          value={formData.auctionStartTime}
          onChange={handleChange}
          placeholder="Auction Start Time"
          className="w-1/3 px-3 py-2 ml-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <input
        type="text"
        name="thumbnail"
        value={formData.thumbnail}
        onChange={handleChange}
        placeholder="Thumbnail URL"
        className="w-full px-3 py-2 mb-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="images"
        value={formData.images[0]}
        onChange={handleImageChange}
        placeholder="Image URL"
        className="w-full px-3 py-2 mb-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Post;
