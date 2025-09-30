import { Calculator, Users, FileText, Headphones, Search, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Accounting & Bookkeeping",
      description: "Stay focused on growth while we handle your accounting needs professionally and accurately.",
      color: "bg-primary",
      learnMore: true,
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Stay focused on growth while we handle your payroll needs professionally and accurately.",
      color: "bg-secondary",
      learnMore: true,
    },
    {
      icon: FileText,
      title: "Tax Services",
      description: "Stay focused on growth while we handle your tax preparation and filing needs professionally.",
      color: "bg-[#56b1b3]",
      learnMore: true,
    },
    {
      icon: Headphones,
      title: "Administrative Support",
      description: "Stay focused on growth while we handle your administrative tasks professionally and efficiently.",
      color: "bg-primary",
      learnMore: true,
    },
    {
      icon: Search,
      title: "Audit Support",
      description: "Stay focused on growth while we handle your audit support and compliance needs professionally.",
      color: "bg-secondary",
      learnMore: true,
    },
    {
      icon: UserCheck,
      title: "Outsourcing Services",
      description: "Stay focused on growth while we handle your outsourcing and business process needs professionally.",
      color: "bg-[#56b1b3]",
      learnMore: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const getCardVariants = (index: number) => ({
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -50 : 50, // Reduced distance for faster animation
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  });

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p 
            className="text-muted-foreground text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore Our Services
          </motion.p>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our <span className="text-orange-700">Professional Services</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={getCardVariants(index)}
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  rotateY: index % 2 === 0 ? 2 : -2,
                  transition: { 
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                style={{ perspective: "1000px" }}
              >
                <Card className="group transition-all duration-500 border-0 shadow-md hover:bg-[#9e2f0d] hover:shadow-2xl h-full overflow-hidden relative">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#9e2f0d]/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <CardHeader className="pb-4 relative z-10">
                    <motion.div 
                      className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-500 relative overflow-hidden`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { 
                          duration: 0.3,
                          type: "spring",
                          stiffness: 400,
                          damping: 15
                        }
                      }}
                    >
                      {/* Icon background animation */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-2xl"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ 
                          scale: 1, 
                          opacity: 1,
                          transition: { duration: 0.2 }
                        }}
                      />
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Icon className="w-8 h-8 text-white group-hover:text-[#9e2f0d] relative z-10" />
                      </motion.div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <CardTitle className="text-xl font-bold text-secondary group-hover:text-white lg:text-2xl">
                        {service.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 relative z-10">
                    <motion.div
                      whileHover={{ 
                        x: 3,
                        transition: { duration: 0.2, delay: 0.1 }
                      }}
                    >
                      <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-white lg:text-2xl">
                        {service.description}
                      </CardDescription>
                    </motion.div>
                    
                    {service.learnMore && (
                      <motion.div
                        whileHover={{ 
                          scale: 1.05,
                          x: 5,
                          transition: { 
                            duration: 0.3,
                            type: "spring",
                            stiffness: 400,
                            damping: 15
                          }
                        }}
                        whileTap={{ 
                          scale: 0.95,
                          transition: { duration: 0.1 }
                        }}
                      >
                        <Button className="w-full py-6 bg-[#56b1b3] flex justify-start items-center font-bold text-decoration-none underline-none lg:text-xl border border-transparent group-hover:border-white group-hover:bg-white/40 text-start transition-all duration-500 text-white relative overflow-hidden">
                          {/* Button background animation */}
                          <motion.div
                            className="absolute inset-0 bg-white/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ 
                              x: "0%",
                              transition: { duration: 0.3 }
                            }}
                          />
                          <span className="relative z-10">Learn More {">>>"}</span>
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;