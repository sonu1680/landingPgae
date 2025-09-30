import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import aboutIllustration from "@/assets/about-illustration.jpg";

const AboutSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    function updateHeight() {
      if (contentRef.current) {
        const height = contentRef.current.getBoundingClientRect().height;
        setContentHeight(height);
      }
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative overflow-hidden"
    >
      {/* Decorative background accents */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-orange-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Illustration */}
          <motion.div
            className="relative order-2 lg:order-1 w-full lg:w-1/2"
            style={{ height: contentHeight ? `${contentHeight}px` : "auto" }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={aboutIllustration}
                alt="About AccRuvia - Professional team collaboration"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            ref={contentRef}
            className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
                Our Information
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-primary">Us</span>
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold text-primary">LN Associate</span>
                , established in March 2016, is a one-stop consultancy firm
                assisting businesses with customized solutions to achieve their
                unique goals. We provide independent assessments of operations
                and structures while offering services in{" "}
                <span className="font-medium text-gray-900">
                  Accounting, Audit, Tax Advisory, Payroll Processing, and
                  Allied Services
                </span>{" "}
                to both Indian and international clients.
              </p>
              <p>
                As trusted advisors, we focus on transforming{" "}
                <span className="italic">visions into reality</span> by
                delivering value-driven guidance. Our professionals stay updated
                with the latest changes to help clients make{" "}
                <span className="font-semibold text-primary">
                  smart, timely, and impactful
                </span>{" "}
                financial decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
