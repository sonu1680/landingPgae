import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

const SoftwareSection = () => {
  const software = [
    { name: "Xero", logo: logo1, color: "text-blue-600" },
    { name: "QuickBooks", logo: logo2, color: "text-green-600" },
    { name: "Tally", logo: logo3, color: "text-red-600" },
    { name: "Recon", logo: logo4, color: "text-orange-600" },
    { name: "MYOB", logo: logo5, color: "text-purple-600" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container py-8   w-full bg-white shadow-lg shadow-gray-300 flex flex-row justify-around rounded-lg  items-center   ">
        <div className="text-center ">
          <h2 className="text-3xl lg:text-5xl font-bold"  >
            Our <span className="text-primary">Software Expertise</span>
          </h2>
        </div>
<div className="w-2 h-20 bg-red-200"></div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {software.map((item, index) => (
            <div key={index} className="group hover:scale-110 transition-transform duration-300 text-center">
                <img src={item.logo}alt={`${item.name} logo`}className="w-14 h-14 object-contain"/>
             
              {/* <p className="text-center mt-3 text-sm font-medium text-muted-foreground">
                {item.name}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;