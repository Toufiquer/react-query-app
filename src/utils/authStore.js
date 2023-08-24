"use client";
import { create } from "zustand";
export const authStore = create((set) => ({
  email: "",
  isLogIn: false,
  userLogIn: (email) =>
    set((store) => {
      console.log(email);
      return { email, isLogIn: true };
    }),
  userLogOut: () => set(() => ({ email: "", isLogIn: false })),
  authLogIn: (email) => set((state) => ({ email: email, isLogIn: true })),
  authLogOut: () => set((state) => ({ email: "", isLogIn: false })),
}));

// How to use this
// import { authStore } from "@/utils/zuStore";
  // const email = authStore((state) => state.email);
  // const isLogIn = authStore((state) => state.isLogIn);
  // const authLogIn = authStore((state) => state.authLogIn);
  // const authLogOut = authStore((state) => state.authLogOut);
