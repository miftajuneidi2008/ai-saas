import Actions from "@/components/Actions";
import Contact from "@/components/Contact";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import { Variants } from "motion";
import * as motion from "motion/react-client";

export default function Home() {
  const myAnimation: Variants = {
    initial: { opacity: 0, y: 100 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.section
        initial="initial"
        whileInView="inView"
        variants={myAnimation}
      >
        <Hero />
      </motion.section>
      <motion.section
        initial="initial"
        whileInView="inView"
        variants={myAnimation}
      >
        <Actions />
      </motion.section>
      <motion.section
        initial="initial"
        whileInView="inView"
        variants={myAnimation}
      >
        <Description />
      </motion.section>
      <motion.section
        initial="initial"
        whileInView="inView"
        variants={myAnimation}
      >
        <Services />
      </motion.section>
      <motion.section
        initial="initial"
        whileInView="inView"
        variants={myAnimation}
      >
        <Pricing />
      </motion.section>
      <motion.section
        initial="initial"
        whileInView="inView"
        variants={myAnimation}
      >
        <Contact />
      </motion.section>

      <motion.section>
        <Footer />
      </motion.section>
    </>
  );
}
