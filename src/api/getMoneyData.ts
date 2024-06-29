import { cookies } from "next/headers";

export async function getMoneyData(authorization: any, uuid: any) {
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
