import {
  Calculator,
  Users,
  FileText,
  Headphones,
  Search,
  UserCheck,
  Globe,
  Briefcase,
  ClipboardList,
  UserCog,
  Landmark,
  SquareLibrary,
  DollarSign,
  Receipt,
  FileCheck,
  Building,
  Folder,
  Calendar,
  MessageSquare,
  FileBarChart,
  Settings,
  Heart,
  ShieldCheck,
  UserPlus,
  Cpu,
  Factory,
  Brain,
  LucideIcon,
} from "lucide-react";

export interface Offering {
  service: string;
  what_it_covers: string;
  icon: LucideIcon|string;
}

export interface MoreData {
  title: string;
  description: string;
  offerings: Offering[];
}

export interface Service {
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
  learnMore: boolean;
  moreData: MoreData;
}

export const SERVICES = [
  {
    title: "Accounting and Bookkeeping Services",
    description:
      "Accurate, reliable, and timely solutions to keep your finances organized and your business on track.",
    color: "bg-primary",
    icon: "Users",
    learnMore: true,
    moreData: {
      title: "Accounting and Bookkeeping Services",
      description:
        "We help you stay organized and compliant. So when audits come, you are already prepared. This is where our outsourced accounting services and bookkeeping for businesses make a real difference.",
      icon: "Calculator",
      offerings: [
        {
          icon: "FileText",
          service: "Regular Transaction Recording",
          what_it_covers:
            "Daily, weekly, or monthly entries to keep your books accurate.",
        },
        {
          icon: "Receipt",
          service: "Invoice Preparation and Entry",
          what_it_covers:
            "Make and log invoices to track payments and reports.",
        },
        {
          icon: "DollarSign",
          service: "Accounts Receivable (AR)",
          what_it_covers:
            "Track customer payments and ensure timely receipt of funds.",
        },
        {
          icon: "DollarSign",
          service: "Accounts Payable (AP)",
          what_it_covers: "Record supplier dues and ensure timely payments.",
        },
        {
          icon: "Landmark",
          service: "Bank Reconciliation Statement (BRS)",
          what_it_covers:
            "Match records with bank statements to catch errors and prevent fraud.",
        },
        {
          icon: "FileBarChart",
          service: "Quarterly and Annual Reporting",
          what_it_covers:
            "Prepare financial reports quarterly and annually to stay on track and comply with regulations.",
        },
        {
          icon: "Settings",
          service: "Budgeting and Forecasting Help",
          what_it_covers:
            "Look at past numbers to plan better and use your resources smartly.",
        },
      ],
    },
  },
  {
    icon: "FileText",
    title: "Payroll Services",
    description:
      "Simplify your payroll with error-free processing and complete compliance support.",
    color: "bg-primary",
    learnMore: true,
    moreData: {
      title: "Payroll Services",
      icon: "Calculator",
      description:
        "We manage your payroll so your team gets paid right—on time, every time. We’re your trusted payroll processing company, offering full payroll tax compliance and HR and payroll integration.",
      offerings: [
        {
          icon: "DollarSign",
          service: "Salary Processing",
          what_it_covers:
            "Calculate wages, bonuses, and compensations with all deductions.",
        },
        {
          icon: "FileCheck",
          service: "Tax Compliance",
          what_it_covers: "Handle payroll taxes for US and Australian clients.",
        },
        {
          icon: "Users",
          service: "Employee Support",
          what_it_covers: "Provide payslips and resolve payroll queries.",
        },
        {
          icon: "Settings",
          service: "Software Integration",
          what_it_covers:
            "Connect with your HR, accounting, and time-tracking tools.",
        },
        {
          icon: "Landmark",
          service: "Direct Deposit",
          what_it_covers:
            "Ensure secure and on-time salary transfers to employee accounts.",
        },
      ],
    },
  },
  {
    title: "Audit Support",
    description:
      "We assist in preparing, reviewing, and streamlining audits for stress-free compliance.",
    icon: "Headphones",
    color: "bg-primary",
    learnMore: true,
    moreData: {
      title: "Audit Support",
      icon: "Calculator",
      description:
        "We help you stay audit-ready with verified data and clear reports—so nothing catches you off guard. Our audit support services include internal audit setup and financial audit preparation to keep everything in check.",
      offerings: [
        {
          icon: "FileCheck",
          service: "Financial Data Verification",
          what_it_covers:
            "Review and confirm the accuracy of financial records.",
        },
        {
          icon: "ClipboardList",
          service: "Internal Audit Setup",
          what_it_covers:
            "Set up clear steps and tools to make internal audits easy and organized.",
        },
        {
          icon: "Settings",
          service: "Audit Planning & Execution",
          what_it_covers: "Plan and run audits with clear steps and deadlines.",
        },
        {
          icon: "FileBarChart",
          service: "Report Preparation",
          what_it_covers:
            "Draft audit reports with findings and recommendations.",
        },
        {
          icon: "MessageSquare",
          service: "Query Resolution",
          what_it_covers:
            "Address audit-related questions and support follow-up actions.",
        },
      ],
    },
  },
  {
    title: "Tax Services",
    color: "bg-primary",
    icon: "Search",
    learnMore: true,
    description:
      "We handle tax planning, filing, and compliance so you can focus on business.",
    moreData: {
      icon: "Calculator",
      title: "Tax Services",
      description:
        "From tax filing support for businesses to smart planning, we keep you compliant and prepared.",
      offerings: [
        {
          icon: "Calculator",
          service: "Tax Calculation",
          what_it_covers: "Figure out how much tax you owe.",
        },
        {
          icon: "FileCheck",
          service: "Tax Filing",
          what_it_covers: "Prepare and submit your tax returns on time.",
        },
        {
          icon: "Landmark",
          service: "Regulatory Compliance",
          what_it_covers:
            "Follow the tax rules so you stay compliant and avoid trouble.",
        },
        {
          icon: "Globe",
          service: "Advisory & Guidance",
          what_it_covers: "Help you plan smart and save where possible.",
        },
        {
          icon: "Folder",
          service: "Documentation Support",
          what_it_covers: "Keep your tax documents organized and ready.",
        },
      ],
    },
  },
  {
    title: "Administrative Support",
    description:
      "Reliable back-office support that saves you time and increases productivity.",
    icon: "UserCheck",
    color: "bg-primary",
    learnMore: true,
    moreData: {
      icon: "Calculator",
      title: "Administrative Support",
      description:
        "From scheduling to filing, we handle your daily tasks quietly—so your work flows without interruptions. Our outsourced admin support includes everything from reports to reconciliation, plus access to a virtual assistant for finance.",
      offerings: [
        {
          icon: "Calendar",
          service: "Meeting Scheduling",
          what_it_covers: "Book meetings and write minutes.",
        },
        {
          icon: "FileText",
          service: "Report Drafting",
          what_it_covers: "Create simple internal reports.",
        },
        {
          icon: "Folder",
          service: "Filing System Management",
          what_it_covers: "Keep your records organized.",
        },
        {
          icon: "Receipt",
          service: "Expense Reconciliation",
          what_it_covers: "Match expenses with reports.",
        },
        {
          icon: "MessageSquare",
          service: "Client & Staff Liaison",
          what_it_covers: "Talk to clients and senior staff on your behalf.",
        },
      ],
    },
  },
  {
    title: "Outsourcing Services",
    description:
      "Stay focused on growth while we handle your outsourcing and business process needs professionally.",
    icon: "Briefcase",
    color: "bg-primary",
    learnMore: false,
    moreData: {
      title: "Outsourcing Services",
      description:
        "From back-office processes to admin and finance tasks, we handle your operations with efficiency and confidentiality so you can scale faster.",
      offerings: [
        {
          icon: "Users",
          service: "Dedicated Virtual Assistants",
          what_it_covers: "Get staff for admin, research, and finance tasks.",
        },
        {
          icon: "ClipboardList",
          service: "Process Documentation",
          what_it_covers: "We design SOPs and process manuals for clarity.",
        },
        {
          icon: "Building",
          service: "Back Office Management",
          what_it_covers: "Delegate routine back-office operations.",
        },
        {
          icon: "FileBarChart",
          service: "Performance Tracking",
          what_it_covers: "Monitor tasks and measure KPIs efficiently.",
        },
        {
          icon: "Globe",
          service: "Global Outsourcing",
          what_it_covers: "Hire support teams from anywhere in the world.",
        },
      ],
    },
  },
];

export const RECRUITMENT = [
  {
    icon: "Users",
    title: "EOR – Employee on Record",
    description:
      "Hire talent globally while we take care of compliance, payroll, and legal responsibilities.",

    moreData: {
      icon: "Users",
      title: "EOR – Employee on Record",
      description:
        "Hiring in India should not be complicated and slow you down. With our EOR services, you can onboard talent in new markets—without setting up a legal entity. We handle the legal side so you can focus on the work.",

      offerings: [
        {
          icon: "ClipboardList",
          service: "Legally Compliant Contracts",
          what_it_covers:
            "We draft and manage employment agreements based on local labor laws.",
        },
        {
          icon: "Calculator",
          service: "Payroll and Tax Management",
          what_it_covers:
            "We ensure accurate salary payments, deductions, and social contributions.",
        },
        {
          icon: "Heart",
          service: "Benefits Administration",
          what_it_covers:
            "We provide health insurance, pensions, and other statutory benefits.",
        },
        {
          icon: "ShieldCheck",
          service: "Compliance and Risk Control",
          what_it_covers:
            "We make sure you follow local laws and avoid legal issues.",
        },
        {
          icon: "UserPlus",
          service: "Onboarding and Offboarding",
          what_it_covers:
            "We manage documentation, background checks, and exit procedures.",
        },
        {
          icon: "UserCog",
          service: "HR Support",
          what_it_covers:
            "We handle employee relations, disputes, and policy guidance.",
        },
      ],
    },
  },

  {
    icon: "Briefcase",
    title: "Permanent Hiring (FTE)",
    description:
      "We help you hire permanent, full-time employees (FTE) who align with your business needs and culture, ensuring long-term growth.",

    moreData: {
      icon: "Briefcase",
      title: "Permanent Hiring (FTE)",
      description:
        "Hiring full-time employees should not be a hassle. We keep it steady and smart. We help you find the right people for long-term roles—without delays or shortcuts. Our process works across industries and adjusts to what you need.",

      offerings: [
        {
          icon: "Search",
          service: "Targeted Sourcing and Screening",
          what_it_covers:
            "We look for candidates who match your role, not just your job title.",
        },
        {
          icon: "Cpu",
          service: "AI-Powered Assessments",
          what_it_covers:
            "Our tools check for skills and mindset, so you do not waste time on poor fits.",
        },
        {
          icon: "Users",
          service: "Cultural Fit Hiring",
          what_it_covers:
            "We make sure candidates will work well with your team—not just on paper.",
        },
      ],
    },
  },

  {
    icon: "ClipboardList",
    title: "Contract Staffing",
    description:
      "Providing skilled professionals on demand to help your business scale efficiently.",

    moreData: {
      icon: "ClipboardList",
      title: "Contract Staffing",
      description:
        "Sometimes you don’t need a full-time hire. You just need the right person for the job—right now. AccRuvia’s contract staffing lets you bring in skilled professionals on short-term contracts without long-term commitments. It’s a simple way to stay flexible, meet deadlines, and keep projects moving.",

      offerings: [
        {
          icon: "Calendar",
          service: "Flexible Contract Terms",
          what_it_covers:
            "We provide contracts that can last a few months (3–12 months) or a few years (1–3 years)—whatever your project needs.",
        },
        {
          icon: "Calculator",
          service: "Payroll Flexibility",
          what_it_covers:
            "Employees can be on our payroll or yours—whatever works best for your setup.",
        },
        {
          icon: "Factory",
          service: "Industry-Specific Sourcing",
          what_it_covers:
            "We hire across IT, Engineering, Construction, Oil & Gas, Consulting, and more.",
        },
      ],
    },
  },

  {
    icon: "UserCog",
    title: "Executive Search (CXOs)",
    description:
      "Connecting top-tier leadership talent with organizations to drive growth and success.",

    moreData: {
      icon: "UserCog",
      title: "Executive Search (CXOs)",
      description:
        "Hiring senior leaders does not mean just filling a role. It is about finding people who understand your description and share your values. They should know how to lead with purpose. We help you hire executives who fit your company and not just the job description.",

      offerings: [
        {
          icon: "Globe",
          service: "Global Talent Sourcing",
          what_it_covers:
            "We search across markets to find experienced leaders who match your goals.",
        },
        {
          icon: "ClipboardList",
          service: "Role-Based Evaluation",
          what_it_covers:
            "Every candidate is assessed based on what the role actually needs—not generic criteria.",
        },
        {
          icon: "Brain",
          service: "Behavioral Assessment",
          what_it_covers:
            "We look at how candidates think, lead, and make decisions. That helps us find people who fit your culture and can drive change.",
        },
      ],
    },
  },
];

