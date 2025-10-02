import { FileUser, UserPlus, Briefcase, Crown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import recruitmentIllustration from "@/assets/recruitment-illustration.jpg";
import { RECRUITMENT } from "@/const";
import { useNavigate } from "react-router-dom";

const RecruitmentSection = () => {
const navigate=useNavigate()

  return (
    <section className=" py-6 lg:py-10 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center lg:text-left mb-8 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center leading-snug">
            Are You Looking for <br />
            <span className="text-primary">Recruitment Services</span> too?
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="flex flex-col justify-between space-y-6 flex-1">
            {RECRUITMENT.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card
                    className="group relative overflow-hidden border border-orange-100 bg-white/80 backdrop-blur-md shadow-md rounded-2xl hover:shadow-xl transition-all duration-500 cursor-pointer"
                    onClick={() =>
                      navigate("/services", {
                        state: { service: JSON.stringify(service.moreData) },
                      })
                    }
                  >
                    <CardContent className="flex items-center gap-6 p-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-xl  bg-primary text-white shadow-lg group-hover:scale-110 transition-transform duration-300 px-4">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-primary">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                          {service.description}
                          <span className="block mt-3 text-primary font-medium cursor-pointer hover:underline">
                            Learn More →
                          </span>{" "}
                        </CardDescription>
                      </div>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9e2f0d]/0 via-[#9e2f0d]/5 to-[#9e2f0d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="relative h-full flex-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={recruitmentIllustration}
                alt="Professional recruitment services illustration"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
