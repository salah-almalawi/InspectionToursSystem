"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function useRequireAuth() {
    const router = useRouter();
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        // ✅ FIXED: Only redirect if we're not already on login page and no token exists
        if (!token && typeof window !== "undefined") {
            const currentPath = window.location.pathname;
            if (currentPath !== "/login") {
                router.replace("/login");
            }
        }
    }, [router, token]);

    // ✅ Return token status for conditional rendering
    return { isAuthenticated: !!token };
}