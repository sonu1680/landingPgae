import { motion } from "framer-motion";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import Marquee from "react-fast-marquee";

const SoftwareSection = () => {
  const software = [
    { name: "Xero", logo: logo1, color: "text-blue-600" },
    { name: "QuickBooks", logo: logo2, color: "text-green-600" },
    { name: "Tally", logo: logo3, color: "text-red-600" },
    { name: "Recon", logo: logo4, color: "text-orange-600" },
    { name: "MYOB", logo: logo5, color: "text-purple-600" },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg shadow-gray-300 rounded-lg flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-12 py-8 px-6">
          {/* Heading */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug">
              Our <span className="text-primary">Software Expertise</span>
            </h2>
          </div>

          {/* Divider (hidden on small) */}
          <div className="hidden lg:block w-1 h-24 bg-primary/70 rounded-lg"></div>

          {/* Logos Marquee */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full overflow-hidden px-2 sm:px-6">
              <Marquee
                gradient={true}
                gradientWidth={50}
                speed={50}
                pauseOnHover={true}
                loop={0}
                className="flex items-center"
              >
                {software.map((item, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center mx-6 sm:mx-8 transition-transform duration-300 hover:scale-110"
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
