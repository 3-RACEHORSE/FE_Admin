"use server";
import { cookies } from "next/headers";

const handleLogin = async (username: any, password: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/api/v1/admin/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      }
    );

    console.log(response.status);
    if (response.ok) {
      const authorization: any = response.headers.get("authorization");
      const uuid: any = response.headers.get("uuid");
      cookies().set("authorization", authorization);
      cookies().set("uuid", uuid);
      return true;
    }

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export default handleLogin;
