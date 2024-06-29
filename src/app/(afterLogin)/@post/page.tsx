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
    <main className="w-2/5 h-full rounded-lg bg-black bg-opacity-40">
      <Post authorization={authorization} uuid={uuid} />
    </main>
  );
}
