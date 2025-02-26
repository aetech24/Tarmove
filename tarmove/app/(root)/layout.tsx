import "../globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-[linear-gradient(90deg,#fdfdfd_10%,#FFF4F6_100%)]">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
