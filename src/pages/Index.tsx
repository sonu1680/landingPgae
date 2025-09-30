import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import AboutSection from "@/components/AboutSection";
import SoftwareSection from "@/components/SoftwareSection";
import TeamSection from "@/components/TeamSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion"; 
import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import { BackgroundLines } from "@/components/ui/background-lines";
import { StickyBanner } from "@/components/ui/sticky-banner";

const Index = () => {
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const heroVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-50 ">
      <main>


        <motion.section
          id="top"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >

          <HeroSection />
        </motion.section>

        <motion.section
          className="w-full flex justify-center "
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <StatsSection />
        </motion.section>

        <motion.section
          id="services"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <ServicesSection />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <RecruitmentSection />
        </motion.section>

        <motion.section
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AboutSection />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SoftwareSection />
        </motion.section>

        <motion.section
          id="team"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <TeamSection />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <CallToActionSection />
        </motion.section>
      </main>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
