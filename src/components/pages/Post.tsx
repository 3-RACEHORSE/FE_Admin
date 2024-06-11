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
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <input
          type="text"
          name="influencerUuid"
          value={formData.influencerUuid}
          onChange={handleChange}
          placeholder="Influencer UUID"
          style={{ marginBottom: "10px", width: "30%" }}
        />
        <input
          type="text"
          name="influencerName"
          value={formData.influencerName}
          onChange={handleChange}
          placeholder="Influencer Name"
          style={{ marginBottom: "10px", width: "30%" }}
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          style={{ marginBottom: "10px", width: "30%" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          style={{ marginBottom: "10px" }}
        ></textarea>
      </div>
      <input
        type="number"
        name="numberOfEventParticipants"
        value={formData.numberOfEventParticipants}
        onChange={handleChange}
        placeholder="Number of Event Participants"
        style={{ marginBottom: "10px" }}
      />
      <input
        type="text"
        name="localName"
        value={formData.localName}
        onChange={handleChange}
        placeholder="Local Name"
        style={{ marginBottom: "10px" }}
      />
      <input
        type="text"
        name="eventPlace"
        value={formData.eventPlace}
        onChange={handleChange}
        placeholder="Event Place"
        style={{ marginBottom: "10px" }}
      />
      <input
        type="datetime-local"
        name="eventStartTime"
        value={formData.eventStartTime}
        onChange={handleChange}
        placeholder="Event Start Time"
        style={{ marginBottom: "10px" }}
      />
      <input
        type="datetime-local"
        name="eventCloseTime"
        value={formData.eventCloseTime}
        onChange={handleChange}
        placeholder="Event Close Time"
        style={{ marginBottom: "10px" }}
      />
      <input
        type="datetime-local"
        name="auctionStartTime"
        value={formData.auctionStartTime}
        onChange={handleChange}
        placeholder="Auction Start Time"
        style={{ marginBottom: "10px" }}
      />
      <input
        type="number"
        name="startPrice"
        value={formData.startPrice}
        onChange={handleChange}
        placeholder="Start Price"
        style={{ marginBottom: "10px" }}
      />
      <input
        type="number"
        name="incrementUnit"
        value={formData.incrementUnit}
        onChange={handleChange}
        placeholder="Increment Unit"
        style={{ marginBottom: "10px" }}
      />
      <input
        type="text"
        name="thumbnail"
        value={formData.thumbnail}
        onChange={handleChange}
        placeholder="Thumbnail URL"
        style={{ marginBottom: "10px" }}
      />
      <input
        type="text"
        name="images"
        value={formData.images[0]}
        onChange={handleImageChange}
        placeholder="Image URL"
        style={{ marginBottom: "10px" }}
      />
      <button type="submit" style={{ marginTop: "20px" }}>
        Submit
      </button>
    </form>
  );
};

export default Post;
