import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { StickyBanner } from "./ui/sticky-banner";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Contact Bar */}

      {/* <div className="w-full flex  bg-gradient-to-br from-orange-50 to-orange-50  justify-center">
        <div
          className="bg-gradient-to-r from-[#ed2f0d] to-[#282b4e] text-white   py-2 rounded-b-2xl
         max-w-[86rem] w-full"
        >
          <div className="container  flex justify-start items-center text-xs sm:text-sm md:text-base lg:text-2xl  sm:gap-10 flex-wrap">
            <div className="flex items-center gap-2 sm:gap-3  ">
              <div className="p-2 rounded-sm border-2 border-white bg-cyan">
                <Phone
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6  "
                  color="white"
                  fill="white"
                />
              </div>
              <span className="font-bold text-lg">+91 9374437099</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 rounded-sm border-2 border-white bg-cyan">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <span className="font-bold text-lg">accruvia@gmail.com</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <StickyBanner>
        <header className="py-2 w-full bg-gradient-to-br from-orange-50 to-orange-50  shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center" onClick={()=>navigate("/")} >
                <div className="flex items-center gap-2">
                  <div className="w-[240px] h-8 flex items-center justify-center">
                    <img src={logo}></img>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <HashLink
                  smooth
                  to="/#top"
                  className="text-foreground hover:text-primary font-medium transition-colors hover:underline hover:decoration-primary underline-offset-4"
                >
                  Home
                </HashLink>
                <HashLink
                  smooth
                  to="/#services"
                  className="text-foreground hover:text-primary font-medium transition-colors hover:underline hover:decoration-primary underline-offset-4"
                >
                  Services
                </HashLink>
                <HashLink
                  smooth
                  to="/#about"
                  className="text-foreground hover:text-primary font-medium transition-colors hover:underline hover:decoration-primary underline-offset-4"
                >
                  About Us
                </HashLink>
                <HashLink
                  smooth
                  to="/#team"
                  className="text-foreground hover:text-primary font-medium transition-colors hover:underline hover:decoration-primary underline-offset-4"
                >
                  Our Team
                </HashLink>
                <Button
                  variant="accent"
                  size="sm"
                  className="bg-[#56b1b3]"
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Us
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              {/* <button className="md:hidden">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </header>
      </StickyBanner>
    </>
  );
};

export default Header;
