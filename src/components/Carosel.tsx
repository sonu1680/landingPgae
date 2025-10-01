import React, { useState, useEffect } from "react";
import logo from "../assets/logo2.png"; //
import { Clock, Users, Shield, Lock, Package, Brain } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const carouselImages = [
  { id: 0, src: logo, title: "Realistic" },
  { id: 1, src: logo, title: "Painting" },
  { id: 2, src: logo, title: "Drawing" },
  { id: 3, src: logo, title: "Animated" },
];


  const features = [
    {id:0,
      icon: Clock,
      title: "Immediately Available",
      description:
        "Our team is ready to assist you at a moment's notice, ensuring your accounting needs are met promptly and efficiently.",
    },
    {id:1,
      icon: Users,
      title: "Managed Accountants",
      description:
        "We provide managed accountants who are supervised by senior professionals, guaranteeing expert oversight.",
    },
    {id:2,
      icon: Shield,
      title: "Turnover Protected",
      description:
        "We ensure continuity and stability in your accounting services to protect you from disruption.",
    },
    {id:3,
      icon: Lock,
      title: "Software & Security",
      description:
        "We utilise advanced accounting software and robust security measures to keep your financial data safe.",
    }
    
  ];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const totalImages = carouselImages.length;
  const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
  const nextIndex = (currentIndex + 1) % totalImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((c) => (c + 1) % totalImages);
    }, 2000);

    return () => clearInterval(interval);
  }, [totalImages]);

  const getTransformValue = (id: number) => {
    if (id === currentIndex) return "translate-x-0 scale-125";
    if (id === prevIndex) return "-translate-x-full scale-100";
    if (id === nextIndex) return "translate-x-full scale-100";
    return "translate-x-full scale-75";
  };

  const getZIndex = (id: number) => {
    if (id === currentIndex) return "z-30";
    if (id === prevIndex || id === nextIndex) return "z-20";
    return "z-10";
  };

  return (
    <div className="container relative w-full h-full overflow-hidden p-4   ">
      <div className="relative w-full h-full flex items-center justify-center">
        {features.map((data) =>{ 
            const Icon = data.icon;
            return (
              <div
                key={data.id}
                className={`absolute transition-all duration-700 ease-in-out  shadow-md shadow-primary/40
              ${getTransformValue(data.id)} ${getZIndex(data.id)}
              h-[84%] w-[40%] gap-x-20
              ${data.id === currentIndex ? "shadow-sm " : "shadow-sm "}
              rounded-xl overflow-hidden  `}
              >
                <div className="w-full h-full  ">
                  <Card
                    className={`border-2 h-full ${
                      data.id === currentIndex
                        ? " bg-gradient-to-r from-[hsl(25,95%,20%)] via-[hsl(25,95%,53%)] to-[hsl(25,95%,20%)]"
                        : "bg-white"
                    } trainsition-all duration-700 ease-in-out  `}
                  >
                    <div className="p-2">
                      <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 rounded-full  flex items-center justify-center mb-6 mx-auto">
                          <Icon className="w-10 h-10 text-accent" />
                        </div>
                        <h3
                          className={`font-bold text-xl leading-relaxed ${
                            data.id === currentIndex
                              ? "text-white"
                              : "text-primary"
                          }  `}
                        >
                          {data.title}
                        </h3>
                        <p
                          className={`font-normal text-sm leading-relaxed ${
                            data.id === currentIndex
                              ? "text-white"
                              : "text-primary"
                          }  `}
                        >
                          {data.description}
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </div>
            );})}
      </div>

     
    </div>
  );
};

export default Carousel;
