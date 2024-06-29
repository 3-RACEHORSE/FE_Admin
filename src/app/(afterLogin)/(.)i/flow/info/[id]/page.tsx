import Header from "@/components/layout/Header";
import TopNav from "@/components/layout/TopNav";
import ChatRoom from "@/components/pages/ChatRoom";
import { cookies } from "next/headers";

export default function Page(props: any) {
  const pathName = props.params.id;
  const authorization = cookies().get("authorization")?.value;
  const uuid = cookies().get("uuid")?.value;
  return (
    <>
      <Header />
      <TopNav />
    </>
  );
}
