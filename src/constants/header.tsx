import { AboutMe } from "../sections/AboutMe";
import { Contact } from "../sections/Contact";
import { Home } from "../sections/Home";
import { Portfolio } from "../sections/Portfolio";
import { Testimonials } from "../sections/Testimonials";

export const sections = [
  { id: "1", name: "header.home", component: <Home />, bgColor: "secondary" },
  {
    id: "2",
    name: "header.about",
    component: <AboutMe />,
    bgColor: "secondary",
  },
  {
    id: "3",
    name: "header.portfolio",
    component: <Portfolio />,
    bgColor: "primary",
    haveIsMobile: true,
  },
  {
    id: "4",
    name: "header.testimonials",
    component: <Testimonials />,
    bgColor: "secondary",
    haveIsMobile: true,
  },
  {
    id: "5",
    name: "header.contact",
    component: <Contact />,
    bgColor: "primary",
    haveIsMobile: true,
  },
];
