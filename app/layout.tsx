import type { Metadata } from "next";
import "./globals.css";

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
      <body className="max-sm:w-screen ">{children}</body>
    </html>
  );
}
