import { About } from "@/components/About";
import { Apps } from "@/components/Apps";
import Footer1 from "@/components/Footer1";
import Header from "@/components/Header";
import { HiTom } from "@/components/HiTom";
import Itoim from "@/components/Itoim";
import { Mentor } from "@/components/Mentor";
import Ubcab from "@/components/Ubcab";
import { Upwork } from "@/components/Upwork";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <HiTom />
      <About />
      <Apps />
      <Upwork />
      <Ubcab />
      <Mentor />
      <Itoim />
      <Footer1 />
    </div>
  );
};

export default Home;
