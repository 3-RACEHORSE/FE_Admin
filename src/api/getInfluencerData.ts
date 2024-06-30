const getInfluencerData = async (authorization: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/auctionpost-service/api/v1/influencer/all`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${authorization}`,
        },
      }
    ); // API 호출
    if (!response.ok) {
      throw new Error("Failed to fetch influencers");
    }
    const data = await response.json(); // JSON 형태로 데이터 파싱
    console.log("불러온 데이터", data);
    return data; // 데이터 반환
  } catch (error) {
    console.error("Error fetching influencers:", error);
    throw error; // 오류 처리
  }
};

export default getInfluencerData;
