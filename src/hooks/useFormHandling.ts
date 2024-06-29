import { useState } from "react";

export const useFormHandling = () => {
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

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    handleFormChange,
  };
};
