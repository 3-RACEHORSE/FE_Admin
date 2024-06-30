interface LastChatData {
  content: any;
  createdAt: any;
}

const getLastChatData = async (
  roomNumber: string,
  authorization: string,
  uuid: string
): Promise<LastChatData | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/chat-service/api/v1/authorization/chat/roomNumber/${roomNumber}/last`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorization}`,
          uuid: `${uuid}`,
        },
      }
    );

    // if (!response.ok) {
    //   throw new Error("Failed to fetch last chat data");
    // }

    const data = await response.json();

    if (data.content == null || data.createdAt === null) {
      return {
        content: "채팅이 시작되지 않았습니다.",
        createdAt: 0,
      };
    }
    return {
      content: data.content,
      createdAt: data.createdAt,
    };
  } catch (error) {
    console.error("Error fetching last chat data:", error);
    return undefined;
  }
};

export default getLastChatData;
