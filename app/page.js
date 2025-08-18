import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonies from "@/components/Testimonies";
import Head from "next/head";


export default function Home() {
  return (
    <div className="relative w-full">
      <Head>
        <title>Devleon Technology - Innovative IT & Security Solutions</title>
        <meta
          name="description"
          content="Devleon Technology offers cutting-edge IT consulting, CCTV systems, smart locks, green energy, and custom software solutions in Abuja, Nigeria."
        />
        <meta
          name="keywords"
          content="IT consulting, CCTV systems, smart locks, green energy, software development, Abuja, Nigeria"
        />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testimonies />
      <Footer />
    </div>
  );
}
