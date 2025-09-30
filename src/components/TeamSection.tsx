import { Linkedin, Facebook, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Anderson",
      role: "Chief Executive Officer",
      description: "Stay focused on growth while we handle your accounting & bookkeeping needs professionally and accurately.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Sarah Williams",
      role: "Chief Financial Officer", 
      description: "Stay focused on growth while we handle your financial planning and strategy needs professionally and accurately.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b029?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "Head of Recruitment",
      description: "Stay focused on growth while we handle your recruitment and talent acquisition needs professionally and accurately.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
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
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  damping: 20
                }
              }}
              style={{ perspective: "1000px" }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 shadow-lg overflow-hidden border border-gray-200 h-full">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 10,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"
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
                    <motion.h3 
                      className="text-xl font-bold text-secondary mb-2"
                      whileHover={{ 
                        scale: 1.05,
                        color: "#ef4444",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p 
                      className="text-primary font-semibold mb-4"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {member.role}
                    </motion.p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
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
                      className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      whileHover={{ 
                        scale: 1.2,
                        rotateY: 15,
                        boxShadow: "0 8px 25px rgba(37, 99, 235, 0.4)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 400,
                        damping: 17
                      }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="p-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
                      whileHover={{ 
                        scale: 1.2,
                        rotateY: -15,
                        boxShadow: "0 8px 25px rgba(30, 64, 175, 0.4)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 400,
                        damping: 17
                      }}
                    >
                      <Facebook className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                      whileHover={{ 
                        scale: 1.2,
                        rotateY: 15,
                        boxShadow: "0 8px 25px rgba(14, 165, 233, 0.4)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 400,
                        damping: 17
                      }}
                    >
                      <Twitter className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;