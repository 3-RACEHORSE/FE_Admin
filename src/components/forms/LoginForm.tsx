"use client";

import React from "react";

interface Props {
  username: any;
  password: any;
  handleUsernameChange: any;
  handlePasswordChange: any;
  handleSubmit: any;
}

function LoginForm({
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
  handleSubmit,
}: Props) {
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="username" className="sr-only">
            아이디
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            value={username}
            onChange={handleUsernameChange}
            className="bg-[#0000006e] appearance-none rounded-none relative block w-full px-3 py-2 border-0 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="아이디"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            비밀번호
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={handlePasswordChange}
            className="bg-[#0000006e] appearance-none rounded-none relative block w-full px-3 py-2 border-0 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="비밀번호"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          로그인
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
