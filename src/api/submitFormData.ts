export const submitFormData = async (
  formData: any,
  images: any,
  authorization: string,
  uuid: string
) => {
  const thumbnail = images[0].croppedSrc;
  const croppedSrcArray = images
    .map((image: { croppedSrc: any }) => image.croppedSrc)
    .filter((_: any, index: number) => index !== 0);

  if (thumbnail === null || croppedSrcArray.includes(null)) {
    return;
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/auctionpost-service/api/v1/auction-post`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorization}`,
          uuid,
        },
        body: JSON.stringify({
          influencerUuid: formData.influencerUuid,
          influencerName: formData.influencerName,
          title: formData.title,
          content: formData.content,
          numberOfEventParticipants: formData.numberOfEventParticipants,
          localName: formData.localName,
          eventPlace: formData.eventPlace,
          eventStartTime: formData.eventStartTime,
          eventCloseTime: formData.eventCloseTime,
          auctionStartTime: formData.auctionStartTime,
          startPrice: formData.startPrice,
          incrementUnit: formData.incrementUnit,
          thumbnail,
          images: croppedSrcArray,
        }),
      }
    );

    console.log("전송 선공", formData);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
