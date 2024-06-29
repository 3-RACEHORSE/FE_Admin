import ChatList from "@/components/pages/ChatList";
import { cookies } from "next/headers";
import Link from "next/link";
import { getChatListData } from "@/api/getChatListData";

export default async function Page() {
  const authorization = cookies().get("authorization")?.value;
  const uuid = cookies().get("uuid")?.value;
  const data = await getChatListData(authorization, uuid);

  return (
    <main className="h-full bg-black bg-opacity-40 w-3/5 flex justify-between rounded-l-lg">
      <div className="h-full w-full overflow-auto">
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
    </main>
  );
}
