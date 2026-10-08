import {
  Award,
  BarChart3,
  Briefcase,
  Fingerprint,
  Globe,
  Handshake,
  Headset,
  Lightbulb,
  Megaphone,
  MessagesSquare,
  MonitorSmartphone,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

import projectStrategy from "@/assets/project-strategy.jpg";
import projectDigital from "@/assets/project-digital.jpg";
import projectBrand from "@/assets/project-brand.jpg";
import projectMarketing from "@/assets/project-marketing.jpg";
import projectWeb from "@/assets/project-web.jpg";
import projectGrowth from "@/assets/project-growth.jpg";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export interface Service {
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    short: "Practical guidance to help you make confident decisions and move faster.",
    description:
      "We work alongside your leadership team to clarify priorities, streamline operations, and build a roadmap that turns ambition into measurable progress.",
    features: [
      "Business health assessment",
      "Operations & process improvement",
      "Strategic planning workshops",
      "Quarterly performance reviews",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Solutions",
    short: "Modern tools and systems that save time and reduce manual work.",
    description:
      "From internal dashboards to customer-facing platforms, we design and implement digital solutions that fit the way your business actually works.",
    features: [
      "Workflow automation",
      "Custom dashboards & reporting",
      "Systems integration",
      "Technology stack advisory",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    short: "Consistent, well-planned marketing that reaches the right audience.",
    description:
      "We help you plan, launch, and measure marketing campaigns across channels — so every dollar spent has a clear purpose and a trackable result.",
    features: [
      "Campaign planning & execution",
      "Content & social media support",
      "Email marketing",
      "Performance tracking & reporting",
    ],
  },
  {
    icon: Fingerprint,
    title: "Brand Strategy",
    short: "A clear, credible brand that customers remember and trust.",
    description:
      "We define what your brand stands for and how it shows up — from positioning and messaging to a visual identity that feels professional at every touchpoint.",
    features: [
      "Brand positioning & messaging",
      "Visual identity direction",
      "Brand guidelines",
      "Launch & rollout support",
    ],
  },
  {
    icon: Globe,
    title: "Website Solutions",
    short: "Fast, professional websites built to convert visitors into customers.",
    description:
      "We plan, design, and build websites that look credible, load quickly, and make it easy for customers to take the next step with your business.",
    features: [
      "Corporate & marketing websites",
      "Landing pages",
      "Website redesigns",
      "Ongoing care & updates",
    ],
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    short: "Structured programs to help you enter new markets and scale sustainably.",
    description:
      "We identify your strongest growth opportunities and build a practical plan to pursue them — with clear milestones, budgets, and accountability.",
    features: [
      "Market & competitor analysis",
      "Growth roadmap development",
      "Pricing & offering strategy",
      "Expansion planning",
    ],
  },
];

export interface Project {
  image: string;
  category: string;
  title: string;
  description: string;
  result: string;
}

export const projects: Project[] = [
  {
    image: projectStrategy,
    category: "Business Consulting",
    title: "Growth Roadmap for a Regional Retailer",
    description:
      "A twelve-month strategic plan that realigned operations, pricing, and staffing around the client's most profitable segments.",
    result: "+38% revenue growth",
  },
  {
    image: projectDigital,
    category: "Digital Solutions",
    title: "Analytics Platform for a Logistics Firm",
    description:
      "A central reporting dashboard replacing manual spreadsheets, giving leadership real-time visibility across the business.",
    result: "12,000+ active users",
  },
  {
    image: projectBrand,
    category: "Brand Strategy",
    title: "Rebrand for a Financial Services Firm",
    description:
      "A complete repositioning and visual identity refresh that brought clarity and credibility to a 20-year-old brand.",
    result: "2.4x brand recall",
  },
  {
    image: projectMarketing,
    category: "Marketing Support",
    title: "Multi-Channel Campaign for a SaaS Startup",
    description:
      "A coordinated campaign across search, social, and email that built a predictable pipeline of qualified leads.",
    result: "3.1x qualified leads",
  },
  {
    image: projectWeb,
    category: "Website Solutions",
    title: "Corporate Website for a Consultancy",
    description:
      "A full redesign focused on clarity, speed, and conversion — turning an outdated brochure site into a lead generator.",
    result: "+64% conversion rate",
  },
  {
    image: projectGrowth,
    category: "Business Growth",
    title: "Market Expansion Strategy",
    description:
      "Research-backed expansion plan that helped a services business enter three new regional markets with confidence.",
    result: "3 new markets entered",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nexa brought structure to decisions we had been postponing for years. Within two quarters we had a clear roadmap and the numbers to prove it was working.",
    name: "Sarah Mitchell",
    role: "Managing Director",
    company: "Northwind Retail Group",
  },
  {
    quote:
      "The team is professional, responsive, and genuinely invested in our success. Our new website started generating qualified enquiries within the first month.",
    name: "David Okafor",
    role: "Founder",
    company: "Vertex Consulting",
  },
  {
    quote:
      "What impressed us most was how practical everything was. No jargon, no fluff — just a clear plan and steady execution we could measure.",
    name: "Elena Petrova",
    role: "Operations Lead",
    company: "Bluepeak Logistics",
  },
  {
    quote:
      "Our rebrand felt effortless with Nexa guiding the process. Clients noticed immediately, and our team finally has a brand they're proud to present.",
    name: "James Carter",
    role: "Partner",
    company: "Halcyon Financial",
  },
  {
    quote:
      "They took the time to understand our business before recommending anything. The marketing support has been consistent, measured, and worth every penny.",
    name: "Priya Sharma",
    role: "Head of Growth",
    company: "Meridian Software",
  },
  {
    quote:
      "Working with Nexa feels like having a senior strategy team on call. They've become a long-term partner in our growth, not just a vendor.",
    name: "Michael Anders",
    role: "CEO",
    company: "Cascade Services",
  },
];

export interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Over a decade of hands-on work with growing businesses, with results we measure and stand behind.",
  },
  {
    icon: Target,
    title: "Tailored Strategies",
    description:
      "No templates or one-size-fits-all plans. Every recommendation is built around your goals, market, and capacity.",
  },
  {
    icon: MessagesSquare,
    title: "Transparent Communication",
    description:
      "Clear timelines, plain-language reporting, and honest advice — you always know where things stand.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "A named point of contact and a team that responds quickly, long after the first deliverable ships.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description:
      "Every engagement starts with agreed metrics, so progress is visible and success is never a matter of opinion.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We grow with our clients. Most of our work comes from relationships that have lasted years, not projects.",
  },
];

export const values: Reason[] = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We give honest advice, even when it's not what you expected to hear. Trust is the foundation of every engagement.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold our work to a professional standard we'd be proud to put our own name on — every time.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work with your team, not around it. The best results come from shared knowledge and open dialogue.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay curious about better tools and methods, and bring practical new ideas to every client we serve.",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We primarily work with small and medium-sized businesses across retail, professional services, logistics, technology, and finance. If you're growing and need structure, strategy, or digital support, we're likely a good fit.",
  },
  {
    question: "How does a typical engagement start?",
    answer:
      "Every engagement begins with a free discovery call. We learn about your goals and challenges, then propose a scoped plan with clear deliverables, timelines, and pricing before any commitment is made.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on scope. Smaller projects like a website refresh start from a fixed package price, while consulting and growth programs are usually structured as monthly retainers. You'll always receive a written quote upfront.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "A website project typically takes 4–8 weeks. Consulting roadmaps are usually delivered within 3–6 weeks, while marketing and growth programs run on an ongoing monthly basis with quarterly reviews.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes. Most of our client work is done remotely through scheduled video calls, shared workspaces, and regular written updates. On-site workshops can be arranged when they add value.",
  },
  {
    question: "Will we have a dedicated point of contact?",
    answer:
      "Always. Every client is assigned a dedicated account lead who coordinates the team, joins your calls, and is available for questions throughout the engagement.",
  },
  {
    question: "Can you work with our existing tools and team?",
    answer:
      "Absolutely. We adapt to your existing systems and collaborate with in-house staff or other vendors. Our goal is to strengthen what you have, not replace it unnecessarily.",
  },
  {
    question: "What makes Nexa different from other agencies?",
    answer:
      "We combine strategic consulting with hands-on execution. You get one accountable partner for advice and implementation — with measurable goals agreed before work begins.",
  },
];

export const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "250+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Industries Served" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start by listening — understanding your goals, challenges, market, and the way your business really operates.",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "We turn what we've learned into a clear, prioritized plan with defined outcomes, timelines, and budgets.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Our team delivers the work in transparent stages, keeping you informed and involved at every milestone.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We measure results against the agreed goals and refine continuously, so performance keeps improving.",
  },
];

export const contactInfo = {
  phone: "+1 (555) 012-3456",
  phoneHref: "tel:+15550123456",
  email: "hello@nexabusinesssolutions.com",
  emailHref: "mailto:hello@nexabusinesssolutions.com",
  whatsapp: "https://wa.me/15550123456",
  address: "120 Market Street, Suite 400, New York, NY 10005",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM EST",
};
