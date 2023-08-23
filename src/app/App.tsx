"use client";
import Nav from "@/components/Nav/Nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setUpAxios } from "@/utils/axios";
import { CookiesProvider } from "react-cookie";
export default function App({ children }: { children: React.ReactNode }) {
  // Create a client
  const queryClient = new QueryClient();
  setUpAxios();
  return (
    <div>
      <CookiesProvider defaultSetCookies={{ path: "/" }}>
        {/* // Provide the client to your App */}
        <QueryClientProvider client={queryClient}>
          <div className="min-h-screen w-full bg-slate-600">
            <Nav />
            {children}
          </div>
        </QueryClientProvider>
      </CookiesProvider>
    </div>
  );
}
