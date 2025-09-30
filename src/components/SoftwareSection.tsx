import { motion } from "framer-motion";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

const SoftwareSection = () => {
  const software = [
    { name: "Xero", logo: logo1 },
    { name: "QuickBooks", logo: logo2 },
    { name: "Tally", logo: logo3 },
    { name: "Recon", logo: logo4 },
    { name: "MYOB", logo: logo5 },
  ];

  // Duplicate array for infinite loop
  const loopedSoftware = [...software, ...software];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-12">
          Our <span className="text-primary">Software Expertise</span>
        </h2>

        {/* Infinite marquee */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex gap-16"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {loopedSoftware.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center"
              >
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="w-20 h-20 object-contain drop-shadow-md"
                />
                <p className="mt-2 text-sm text-gray-600">{item.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
