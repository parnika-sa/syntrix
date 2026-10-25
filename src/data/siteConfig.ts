import { company } from "@/data/company";
import { SHOW_PORTFOLIO } from "@/config/site";

export { company, SHOW_PORTFOLIO };

export const siteConfig = {
  ...company,
  showPortfolio: SHOW_PORTFOLIO,
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
    ...(SHOW_PORTFOLIO ? [{ label: "Portfolio", href: "/portfolio" }] : []),
    { label: "Contact", href: "/contact" },
  ],
};

