import Post from "@/components/pages/Post";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const authorization = cookies().get("authorization")?.value;
  const uuid = cookies().get("uuid")?.value;

  if (authorization === "logout" || uuid === "logout") {
    redirect("/login");
  }

  return (
    <div
      className=" h-full rounded-lg bg-[#0000006e]"
      style={{
        width: "40%",
        height: "100%",
      }}
    >
      <Post authorization={authorization} uuid={uuid} />
    </div>
  );
}
