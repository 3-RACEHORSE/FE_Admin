import Link from "next/link";
import StautsView from "../view/StatusView";
import { cookies } from "next/headers";

async function getMoneyData() {
  const authorization = cookies().get("authorization")?.value;
  const uuid = cookies().get("uuid")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/api/v1/admin/payment/totaldonation`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${authorization}`,
        // uuid: `${uuid}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Network Error");
  }
  const data = await res.json();
  return data;
}

export default async function TopNav() {
  // const data = await getMoneyData();
  return (
    <nav className="bg-[#00000000] text-white relative">
      <div className="max-w-screen-lg mx-auto flex justify-between items-end pt-6 pb-36 px-20"></div>
      <div className="absolute top-0 left-0 mt-8 ml-10 text-[23px] font-bold text-[#ffffff]">
        MEET PLUS
      </div>

      <section className="absolute -bottom-20 left-0 w-full flex justify-evenly">
        <StautsView type="Advertisement" price={1000000} />
        <StautsView type="Payment" price={1000000} />
        <StautsView type="Donation" price={1000000} />

        {/* <StautsView type="Donation" price={data.totalDontaion} /> */}
      </section>
    </nav>
  );
}
