import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'

export const ContactForm = () => {
  return (
    <div
      id="contact-form"
      className="w-full mx-auto px-10 lg:px-28 py-20 grid grid-cols-1 md:grid-cols-2 gap-16  bg-gradient-to-br from-orange-50 via-white to-orange-100"
    >
      {/* Left Side - Contact Info */}
      <div className="space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#0F172A]">
          Keep In Touch With Our <br /> Professional Team
        </h2>
        <p className="text-gray-600 text-lg max-w-md">
          Reach out to us for reliable solutions in accounting, recruitment, and
          taxation services. We’re just a call or email away.
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
    </div>
  );
}

export default ContactForm