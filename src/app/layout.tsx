import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import NavMenu from "@/components/NavMenu";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PNW Cube Drafters",
  description: "Webpage for Magic: The Gathering Cube players in the PNW of the United States.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${openSans.className} antialiased text-gray-300`}>
        <div className="flex md:justify-center min-h-screen min-w-screen">
          <div className="flex-grow bg-[#242424] p-8 md:border-2 md:border-[#323232] md:m-12 md:p-12 md:max-w-6xl">
            <NavMenu />
            <div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
