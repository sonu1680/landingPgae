import { Button } from "@/components/ui/button";
import laptopImage from "@/assets/laptop.png"; 
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 relative">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-r from-[#3b1d16] to-[#ed2f0d] rounded-2xl p-10 lg:pl-40 overflow-visible">
          {/* Laptop Image */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className=" hidden lg:block absolute -left-10 -top-48  w-[650px] drop-shadow-2xl "
          >
            <img src={laptopImage} alt="Laptop" className="" />
          </motion.div>

          {/* Text + Button */}
          <div className="text-white space-y-6 lg:pl-[32rem]">
            <p className="text-base sm:text-lg opacity-90 whitespace-nowrap">
              We are here to support you in every step.
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
              Let's schedule a quick call.
            </h2>
            <Button
              size="lg"
              className="bg-white text-[#9e2f0d] font-semibold px-8 py-6 rounded-lg hover:bg-gray-100"
              onClick={() => navigate("/contact-us")}
            >
              Contact Us Today!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
