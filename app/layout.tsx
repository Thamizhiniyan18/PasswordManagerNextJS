import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeNavDesktop from "./ui/HomeNavDesktop";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import HomeNavMobile from "./ui/HomeNavMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | PM",
    default: "Password Manager",
  },
  description: "A Kinda Cool Place to Store Your Secrets",
  metadataBase: new URL("https://password-manager-next-js-pi.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex w-screen min-h-screen justify-start items-center flex-col`}
      >
        <ToastContainer />
        <HomeNavDesktop />
        <HomeNavMobile />
        {children}
      </body>
    </html>
  );
}
