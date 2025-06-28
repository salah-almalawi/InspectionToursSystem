"use client";
import { Provider } from "react-redux";
import { useEffect } from "react";
import store from "@/store/index";
import { setToken } from "@/features/auth/authSlice";

export default function Providers({ children }) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      store.dispatch(setToken(token));
    }
  }, []);
  return <Provider store={store}>{children}</Provider>;
}
