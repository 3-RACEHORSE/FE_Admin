"use server";

import { cookies } from "next/headers";

const logout = async () => {
  cookies().set("authorization", "logout");
  cookies().set("uuid", "logout");
  return true;
};

export default logout;
