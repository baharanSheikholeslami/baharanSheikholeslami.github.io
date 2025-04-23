import Header from "@/modules/Header";
import ProjectsPageModule from "@/modules/ProjectsPageModule";
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
      <ProjectsPageModule />
    </>
  );
};

export default Page;
