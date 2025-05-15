import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Cryptonautt",
  description: "Web3 Community Growth strategist, Ambassador, Content creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-sm:w-screen ">
        <Navbar />
        <div className="overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
