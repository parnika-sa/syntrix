import { company } from "@/data/company";

export { company };

export const siteConfig = {
  ...company,
  stats: [
    { value: 150, suffix: "+", label: "Projects Delivered", detail: "Across Web, Cloud & IT" },
    { value: 98, suffix: "%", label: "Client Satisfaction", detail: "Consistently Rated 5 Stars" },
    { value: 8, suffix: "+", label: "Years Experience", detail: "Engineering Excellence" },
    { value: 12, suffix: "+", label: "Countries Served", detail: "Global Delivery Footprint" },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
};
