import { Mail, Phone, MapPin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import heroIllustration from "@/assets/hero-illustration.jpg";

const ContactUs = () => {
  return (
    <div className="w-full overflow-x-hidden  bg-gradient-to-br from-orange-50 to-orange-50 text-gray-900">

      {/* Hero Section */}
        <section className="relative  py-20 ">
          {/* Accent blobs */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#0F172A]">
                  Let’s Connect for a{" "}
                  <span className=" bg-clip-text text-primary ">
                    Free Consultation
                  </span>
                </h1>
                <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  We’d love to hear from you! Let’s discuss how we can help you
                  grow and support your business with professional accounting &
                  recruitment solutions.
                </p>
                <div>
                  <a
                    href="#contact-form"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="relative">
                <img
                  src={heroIllustration}
                  alt="AccRuvia - Professional accounting and recruitment services"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

      {/* Contact Info + Form */}
      <section
        id="contact-form"
        className="max-w-[86rem] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        {/* Left Side - Contact Info */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#0F172A]">
            Keep In Touch With Our <br /> Professional Team
          </h2>
          <p className="text-gray-600 text-lg max-w-md">
            Reach out to us for reliable solutions in accounting, recruitment,
            and taxation services. We’re just a call or email away.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: "Head Office",
                desc: "Suite 3, 1330 Ferntree, Gully Road Scoresby, VIC 3179",
              },
              {
                icon: MapPin,
                title: "Location",
                desc: "Melbourne, Victoria, Australia",
              },
              {
                icon: Mail,
                title: "Email",
                desc: "info@accruvia.com",
              },
              {
                icon: Phone,
                title: "Phone",
                desc: "+91 98765 43210",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white shadow-md">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <p className="text-gray-700 mb-8 text-lg font-medium">
            Send us a message and we’ll get back to you shortly.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "First Name *", type: "text" },
              { label: "Last Name *", type: "text" },
              { label: "Email *", type: "email" },
              { label: "Subject", type: "text" },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Mobile Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
