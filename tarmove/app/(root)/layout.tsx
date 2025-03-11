import React from "react";
import "../globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

// The main wrapper for our entire website
// Puts the navigation, page content, and footer in the right spots
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Sets up the basic HTML structure
    <html lang="en">
      {/* The body of our website with a gradient background */}
      <body
        className="min-h-screen bg-[linear-gradient(90deg,#fdfdfd_10%,#FFF4F6_100%)]">
        {/* Our top navigation menu */}
        <Nav />
        
        {/* Where each page's unique content goes */}
        {children}
        
        {/* Our footer at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}
