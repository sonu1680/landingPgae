

import { Card, CardContent } from "@/components/ui/card";
import {
 
  Calculator,
  FileCheck,
  RefreshCw,
  Database,
  FileText,
  Settings,

} from "lucide-react";
import heroImage from "@/assets/accountant-hero.png";

import Carousel from "./Carosel";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="bg-hero-bg py-16  bg-gradient-to-br from-orange-50 via-white to-orange-100">
    <div className="container mx-auto px-4 ">
      <div className="grid lg:grid-cols-2 gap-12 items-center ">
        <div className="space-y-6 ">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
            How can we help <br />
            <span className="text-primary">Bookkeepers &</span> <br />
            <span className="text-primary">Accountants</span>
          </h1>
          <p className="text-lg text-text-gray max-w-lg">
            We provide specialised support and solutions to enhance efficiency,
            accuracy, and growth for accountants and bookkeepers.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Professional accountant working with documents and calculator"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
);





const ServicesGrid = () => {
  const services = [
    {
      icon: Calculator,
      title: "Monthly, Quarterly, and Annual Bookkeeping",
      description:
        "Delivering comprehensive bookkeeping services on a regular schedule.",
    },
    {
      icon: FileCheck,
      title: "Account Corrections and Year-End Adjustments",
      description:
        "Reviewing and correcting books of account, and posting necessary year-end adjustments.",
    },
    {
      icon: RefreshCw,
      title: "Control Account Reconciliation",
      description: "Ensuring accuracy by reconciling various control accounts.",
    },
    {
      icon: Database,
      title: "Accounting Software Conversion",
      description:
        "Assisting with transitions to new accounting software and ensuring smooth conversions.",
    },
    {
      icon: FileText,
      title: "Tax Return Preparation",
      description:
        "Preparing tax returns for forms 1120, 1120S, 1065, and related 1040s.",
    },
    {
      icon: Settings,
      title: "System Implementation and Integration",
      description:
        "Supporting the implementation and integration of accounting systems to streamline operations.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group transition-all duration-300 border border-primary/30 shadow-sm hover:shadow-xl rounded-xl bg-white">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                   
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};





const ServicePage = () => (
  <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100">
    <HeroSection />
    <ServicesGrid />

    <div className=" xl:flex items-center justify-center hidden flex-col  bg-gradient-to-br from-orange-50 via-white to-orange-100  p-5">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
          The Boutique Accounts Difference
        </h2>
      </div>
      <div className="container w-[90%] h-[60vh] overflow-hidden  ">
        <Carousel />
      </div>
    </div>

    <ContactForm />
  </div>
);

export default ServicePage;
