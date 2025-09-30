import {
  Calculator,
  Users,
  FileText,
  Headphones,
  Search,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Accounting & Bookkeeping",
      description:
        "Stay focused on growth while we handle your accounting needs professionally and accurately. Our team ensures precise bookkeeping, regular financial reporting, and compliance checks so that you can concentrate on scaling your business without worrying about numbers.",
    },
    {
      icon: Users,
      title: "Payroll Services",
      description:
        "Stay focused on growth while we handle your payroll needs professionally and accurately.",
    },
    {
      icon: FileText,
      title: "Tax Services",
      description:
        "Stay focused on growth while we handle your tax preparation and filing needs professionally.",
    },
    {
      icon: Headphones,
      title: "Administrative Support",
      description:
        "Stay focused on growth while we handle your administrative tasks professionally and efficiently.",
    },
    {
      icon: Search,
      title: "Audit Support",
      description:
        "Stay focused on growth while we handle your audit support and compliance needs professionally.",
    },
    {
      icon: UserCheck,
      title: "Outsourcing Services",
      description:
        "Stay focused on growth while we handle your outsourcing and business process needs professionally.",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
            Explore Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Professional Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to support your business growth
            with professionalism and precision.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expanded === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card
                  onClick={() => setExpanded(isExpanded ? null : index)}
                  className="cursor-pointer relative h-full border border-orange-100 bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden"
                >
                  {/* Icon */}
                  <CardHeader className="pb-4 flex flex-col items-start">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-md mb-4">
                      <Icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <CardDescription
                      className={`text-muted-foreground leading-relaxed transition-all duration-300 ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                    >
                      {service.description}
                    </CardDescription>

                    <Button
                      variant="ghost"
                      className="group flex items-center gap-2 text-primary hover:text-orange-700 transition-all duration-300 font-semibold"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpanded(isExpanded ? null : index);
                      }}
                    >
                      {isExpanded ? "Show Less" : "Learn More"}
                      <ArrowRight
                        className={`w-5 h-5 transition-transform ${
                          isExpanded ? "rotate-90" : "group-hover:translate-x-1"
                        }`}
                      />
                    </Button>
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
