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
    <section className="py-16 ">
      <div className="container py-8   w-full bg-white shadow-lg shadow-gray-300 flex flex-row justify-around rounded-lg  items-center   ">
        <div className="text-center w-1/2 ">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Our <span className="text-primary">Software Expertise</span>
          </h2>
        </div>
        <div className="w-2 h-20 bg-primary/70 rounded-lg "></div>
        <div className="flex w-1/2 flex-wrap justify-center items-center gap-12 px-10 rounded-xl overflow-hidden">
  <Marquee
    gradient={true}         
    gradientWidth={80}      
    speed={50} 
    pauseOnHover={true} 
    loop={0} 
    className="flex items-center"
  >
    {software.map((item, index) => (
      <div
        key={index}
        className="group flex flex-col items-center mx-8 transition-transform duration-300 hover:scale-110"
      >
        <img
          src={item.logo}
          alt={`${item.name} logo`}
          className="w-16 h-16 object-contain"
        />
      </div>
    ))}
  </Marquee>
</div>

      </div>
    </section>
  );
};

export default SoftwareSection;
