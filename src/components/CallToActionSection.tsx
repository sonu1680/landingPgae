import { Button } from "@/components/ui/button";
import laptopImage from "@/assets/laptop.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  const navigate = useNavigate();

  return (
    <section className=" relative">
      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-to-r from-[#3b1d16] via-[#ed2f0d] to-[#3b1d16] rounded-3xl p-10 lg:flex lg:items-center lg:justify-between shadow-2xl overflow-visible">
          {/* Laptop Image inside container */}
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block flex-shrink-0"
          >
            <img
              src={laptopImage}
              alt="Laptop"
              className="w-[420px] max-w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          {/* Text + Button */}
          <div className="text-white space-y-6 lg:ml-16 lg:w-1/2">
            <p className="text-base sm:text-lg opacity-90">
              We are here to{" "}
              <span className="text-yellow-300 font-semibold">support you</span>{" "}
              in every step.
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
              Let’s <span className="text-cyan-300">schedule</span> a quick
              call.
            </h2>
            <Button
              size="lg"
              className="relative px-10 py-6 rounded-xl font-semibold text-lg 
                         bg-white text-[#9e2f0d] hover:text-[#ed2f0d]
                         shadow-md hover:shadow-xl transition
                         before:absolute before:inset-0 before:rounded-xl 
                         before:p-[2px] before:bg-gradient-to-r before:from-[#ffb347] before:to-[#ffcc33] before:opacity-70 before:-z-10"
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
