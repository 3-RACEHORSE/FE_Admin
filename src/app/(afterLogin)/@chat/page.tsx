import ChatList from "@/components/pages/ChatList";
import ChatRoom from "@/components/pages/ChatRoom";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import styles from "@/components/pages/chat.module.scss";
import Link from "next/link";

async function getChatListData() {
  const authorization = cookies().get("authorization")?.value;
  const uuid = cookies().get("uuid")?.value;
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
  console.log(res.status, "입니다");
  if (res.status === 401 || res.status === 500) {
    // 이후 에러코드 401로 수정 필요
    console.log("토큰없");
    redirect("/login");
  }
  if (!res.ok) {
    // throw new Error("Network Error");
    redirect("/login");
  }

  const data = await res.json();
  return data;
}

export default async function Page() {
  const authorization = cookies().get("authorization")?.value;
  const uuid = cookies().get("uuid")?.value;

  const data = await getChatListData();

  return (
    <div
      className=" h-full bg-[#0000006e]"
      style={{
        width: "60%",
        display: "flex",
        padding: "0.5%",
        justifyContent: "space-between",
        borderRadius: "7px 0px 0px 7px",
      }}
    >
      <div className={styles["chatListLayout"]}>
        {data.map((chat: any, index: any) => (
          <Link href={`/i/flow/info/${chat.roomNumber}`} key={index}>
            <ChatList
              key={index}
              thumbnail={chat.thumbnail}
              title={chat.title}
              authorization={authorization}
              uuid={uuid}
              roomNumber={chat.roomNumber}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
