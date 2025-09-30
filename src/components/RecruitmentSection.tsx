import { FileUser, UserPlus, Briefcase, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import recruitmentIllustration from "@/assets/recruitment-illustration.jpg";

const RecruitmentSection = () => {
  const recruitmentServices = [
    {
      icon: FileUser,
      title: "EOR - Employee on Record",
      description: "Stay focused on growth while we handle your accounting & recruitment needs with dedication.",
    },
    {
      icon: UserPlus,
      title: "Permanent Hiring (FTE)",
      description: "Stay focused on growth while we handle your permanent hiring and recruitment needs with dedication.",
    },
    {
      icon: Briefcase,
      title: "Contract Staffing",
      description: "Stay focused on growth while we handle your contract staffing and recruitment needs with dedication.",
    },
    {
      icon: Crown,
      title: "Executive Search (C2Os)",
      description: "Stay focused on growth while we handle your executive search and C-level recruitment needs with dedication.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center lg:text-left mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">
            Are You Looking for <br/><span className="text-orange-700">Recruitment Services</span> too?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch  ">
          <div className="flex flex-col justify-between space-y-6 flex-1 ">
            {recruitmentServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group transition-all duration-300 border-0 shadow-sm hover:bg-[#9e2f0d] hover:shadow-lg hover:scale-105">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-20 h-20 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-10 h-10 text-white group-hover:text-[#9e2f0d]" />
                    </div>
                    <div className="space-y-2 ">
                      <CardTitle className="text-2xl font-bold  text-secondary group-hover:text-white text-orange-700">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground lg:text-xl leading-relaxed group-hover:text-white">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="relative h-full flex-1">
            <img
              src={recruitmentIllustration}
              alt="Professional recruitment services illustration"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;