"use client";
import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
const inter = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
import { ApolloProvider } from "@apollo/client";
import client from "@/API/Apollo/config";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

// export const metadata: Metadata = {
//   title: "Bloggy",
//   description: "A blogging plateform",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider client={client}>
          {pathname !== "/login" && <Header />}
          <div
            className={`${
              pathname == "/login" ? " " : "mb-4 mt-20 m-auto max-w-[1180px]"
            }`}
          >
            {children}
          </div>
          <Toaster />
        </ApolloProvider>
      </body>
    </html>
  );
}
