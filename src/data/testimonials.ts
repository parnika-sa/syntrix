export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Gurpreet Singh",
    role: "Managing Director",
    company: "Apex Precision Tools & Fasteners",
    location: "Ludhiana, India",
    content: "Syntrixmesh Solutions and Manmeet Singh took our entire manufacturing operation into the cloud era. Their custom ERP replaced years of manual ledger chaos with real-time accuracy across our lines. Truly an end-to-end partner who understands engineering as deeply as business.",
    rating: 5,
    service: "Custom Software & Cloud ERP"
  },
  {
    id: "2",
    name: "David Miller",
    role: "VP of Product",
    company: "Aura Logistics US",
    location: "Chicago, USA",
    content: "Working with Syntrixmesh from India has been smoother than local US agencies. Their AI chat agent handles 60% of our after-hours customer queries without a hiccup. The attention to detail in their Next.js code is world-class.",
    rating: 5,
    service: "AI Chat & Automation"
  },
  {
    id: "3",
    name: "Amanpreet Kaur",
    role: "Founder & Creative Director",
    company: "Zohar Luxury Fabrics",
    location: "Delhi NCR, India",
    content: "Our online sales doubled within two months of launching our new headless e-commerce store built by Syntrixmesh. The animations feel butter-smooth, the checkout never stutters, and the site score is 99 on Google PageSpeed.",
    rating: 5,
    service: "Web & E-Commerce Development"
  },
  {
    id: "4",
    name: "Vikramjit Cheema",
    role: "Chief Technology Officer",
    company: "KisanAgro Exports",
    location: "Punjab, India",
    content: "From structured fiber cabling in our cold storage facility to high-performance workstations for our logistics team, their Hardware & IT team executed the entire setup ahead of schedule. Exceptional reliability.",
    rating: 5,
    service: "Hardware & IT Infrastructure"
  },
  {
    id: "5",
    name: "Elena Rostova",
    role: "Co-Founder",
    company: "BlockPulse Protocols",
    location: "Dubai, UAE",
    content: "Syntrixmesh delivered audited smart contracts and a stunning dApp UI that passed third-party review on first submission. Manmeet's architectural clarity saved us weeks of redundant gas optimization.",
    rating: 5,
    service: "Web3 & Smart Contracts"
  }
];
