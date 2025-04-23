import AboutPageModule from "@/modules/AboutPageModule";
import Header from "@/modules/Header";
import { Geist, Geist_Mono } from "next/font/google";

import type { FC } from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Page: FC = () => {
  return (
    <>
      <Header />
      <AboutPageModule />
    </>
  );
};

export default Page;
