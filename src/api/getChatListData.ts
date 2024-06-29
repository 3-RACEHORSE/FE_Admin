import { redirect } from "next/navigation";

export async function getChatListData(authorization: any, uuid: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/chat-service/api/v1/authorization/chat/chatRooms`,
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${authorization}`,
        uuid: `${uuid}`,
      },
    }
  );

  if (res.status === 401 || res.status === 500) {
    redirect("/login");
  }
  if (!res.ok) {
    redirect("/login");
  }

  const data = await res.json();
  return data;
}
