import Actions from "@/components/Actions";
import Contact from "@/components/Contact";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <Actions />
    <Description />
    <Services />
    <Pricing/>
    <Contact />
    <Footer />
    </>
  );
}
