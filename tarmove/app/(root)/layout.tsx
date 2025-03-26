import React from "react";
import "../globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-[linear-gradient(90deg,#fdfdfd_10%,#FFF4F6_100%)]`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
