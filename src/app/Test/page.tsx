"use client";
import { authStore } from "@/utils/authStore";

import { deleteCookie, saveCookie } from "@/utils/cookies";
export default function page() {
  const email = authStore((state) => state.email);
  const isLogIn = authStore((state) => state.isLogIn);
  const authLogIn = authStore((state) => state.authLogIn);
  const authLogOut = authStore((state) => state.authLogOut);
  return (
    <main>
      <h2>Auth: {isLogIn ? "True" : "False"}</h2>
      <h2>Email: {email}</h2>
      <button
        onClick={() => {
          authLogIn("1010@12.com");
          saveCookie("token", "1010@12.com");
        }}
        type="button"
      >
        Log In
      </button>
      <button
        onClick={() => {
          authLogOut();
          deleteCookie("token");
        }}
        type="button"
      >
        Log Out
      </button>
    </main>
  );
}
