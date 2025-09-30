import { Linkedin, Facebook, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import linkedinIcon from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";


const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Anderson",
      role: "Chief Executive Officer",
      description:
        "Stay focused on growth while we handle your accounting & bookkeeping needs professionally and accurately.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Sarah Williams",
      role: "Chief Financial Officer",
      description:
        "Stay focused on growth while we handle your financial planning and strategy needs professionally and accurately.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "Head of Recruitment",
      description:
        "Stay focused on growth while we handle your recruitment and talent acquisition needs professionally and accurately.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.8,
      rotateX: -20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };
  return (
    <section id="team" className="py-20 bg-background h-[135vh] ">
      <div className="container mx-auto px-4 ">
        <motion.div
          className="text-center mb-16 "
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our <span className="text-primary">Management Team</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-72  bg-gradient-to-r from-[#ed2f0d] to-[#282b4e]  p-12 rounded-lg   "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateY: 5,
                rotateX: 5,
                transition: {
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <Card className="group  transition-all duration-300  overflow-hidden  h-full  p-4 border-2 border-orange-700 rounded-xl ">
                <div className="relative overflow-hidden  flex justify-center items-center  p-8 ">
                  <div className="w-[65%]  p-2 flex justify-center items-center  rounded-full bg-cyan-500 absolute bottom-0  flex-col  ">
                    <span className="text-xl font-bold text-white">
                      {member.name}{" "}
                    </span>
                    <span className="text-sm text-white">{member.role} </span>
                  </div>
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-[90%] aspect-square object-cover rounded-lg  "
                    whileHover={{
                      scale: 1.1,
                      rotateY: 10,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 "
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <CardContent className="p-6 space-y-4">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-black leading-relaxed mb-6">
                      {member.description}
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex justify-center space-x-4"
                    variants={socialVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{
                        scale: 1.2,
                        rotateY: 15,
                        boxShadow: "0 8px 25px rgba(37, 99, 235, 0.4)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <img
                        src={linkedinIcon}
                        className="w-10 h-10"
                        alt="linkedin"
                      />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{
                        scale: 1.2,
                        rotateY: -15,
                        boxShadow: "0 8px 25px rgba(30, 64, 175, 0.4)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <div className="flex flex-row">
                        <div className="w-1  mr-2 h-10 bg-cyan-500 rounded-full"></div>
                        <img
                          src={twitter}
                          className="w-10 h-10"
                          alt="twitter"
                        />
                        <div className="w-1  ml-2 h-10 bg-cyan-500 rounded-full"></div>
                      </div>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{
                        scale: 1.2,
                        rotateY: 15,
                        boxShadow: "0 8px 25px rgba(14, 165, 233, 0.4)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <img
                        src={facebook}
                        className="w-10 h-10"
                        alt="facebook"
                      />
                    </motion.a>
                  </motion.div>
                </CardContent>
              <div className="w-[90%] h-4 mt-2 absolute rounded-full  bg-cyan-500"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
