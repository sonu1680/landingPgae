import React, { useState } from "react";
import {
  Linkedin,
  Facebook,
  Twitter,
  Mail,
  Phone,
  Globe,
  ChevronRight,
  Award,
  Users,
  Target,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "John Anderson",
      role: "Chief Executive Officer",
      description:
        "Visionary leader with 15+ years of experience driving organizational growth and innovation in financial services.",
      expertise: ["Strategic Planning", "Business Development", "Leadership"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "john@company.com",
      },
      stats: { projects: "500+", experience: "15 Years", clients: "200+" },
    },
    {
      name: "Sarah Williams",
      role: "Chief Financial Officer",
      description:
        "Financial strategist specializing in corporate finance, risk management, and sustainable growth initiatives.",
      expertise: ["Financial Planning", "Risk Management", "M&A Strategy"],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@company.com",
      },
      stats: { managed: "$2B+", experience: "12 Years", deals: "50+" },
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      description:
        "Tech innovator passionate about digital transformation and building scalable enterprise solutions.",
      expertise: ["Digital Innovation", "AI & ML", "Cloud Architecture"],
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=600&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@company.com",
      },
      stats: { products: "30+", experience: "10 Years", team: "100+" },
    },
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.85,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 20px rgba(237, 47, 13, 0)",
      "0 0 40px rgba(237, 47, 13, 0.3)",
      "0 0 20px rgba(237, 47, 13, 0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  return (
    <section className="relative py-24  overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-purple-500/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <Users className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              MEET THE EXPERTS
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
              Leadership
            </span>{" "}
            Team
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Dedicated professionals committed to driving innovation and
            delivering exceptional results for our clients worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              animate={hoveredIndex === index ? floatingAnimation : {}}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative"
            >
              <motion.div
                animate={hoveredIndex === index ? glowAnimation : {}}
                className="relative group"
              >
                <Card className="relative overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[1px] bg-white rounded-lg" />

                  <div className="relative p-8">
                    <motion.div
                      className="relative mb-6 mx-auto w-48 h-48"
                      whileHover={{ scale: 1.05, rotateY: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-purple-600 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      <motion.div
                        className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    <motion.div
                      className="text-center mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {member.description}
                      </p>
                    </motion.div>

                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {member.expertise.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-orange-100 to-purple-100 text-gray-700 rounded-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + skillIndex * 0.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div
                      className="grid grid-cols-3 gap-2 mb-6 pt-4 border-t border-gray-100"
                      variants={statsVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {Object.entries(member.stats).map(
                        ([key, value], statIndex) => (
                          <div key={statIndex} className="text-center">
                            <p className="text-lg font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                              {value}
                            </p>
                            <p className="text-xs text-gray-500 capitalize">
                              {key}
                            </p>
                          </div>
                        )
                      )}
                    </motion.div>

                    <div className="flex justify-center gap-3">
                      <motion.a
                        href={member.social.linkedin}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.1, rotateZ: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.1, rotateZ: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.1, rotateZ: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                    </div>

                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-purple-500/10 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meet Our Full Team
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
