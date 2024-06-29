"use client";

import React, { useState } from "react";
import LoginForm from "@/components/forms/LoginForm";
import handleLogin from "@/api/handleLogin";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);

    if (await handleLogin(username, password)) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 rounded-lg bg-[#0000006e] p-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            MEET PLUS
          </h2>
        </div>
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
