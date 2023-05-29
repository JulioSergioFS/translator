import googleGmail from "@iconify/icons-logos/google-gmail";
import whatsappIcon from "@iconify/icons-logos/whatsapp-icon";
import { Icon } from "@iconify/react";
import { AnimateComponent } from "../components/AnimateComponent";
import useLocales from "../hooks/useLocales";
import "../styles/sections/contact.scss";

export function Contact({ isMobile }: { isMobile?: boolean }) {
  const { t } = useLocales();

  const socials = [
    {
      name: "juliosecondary@gmail.com",
      link: `mailto:juliosecondary@gmail.com?subject=${t(
        "sections.contact.subjects.email"
      )}`,
      icon: <Icon icon={googleGmail} height={22} />,
    },
    {
      name: "+55 (31) 99211-1538",
      link: `https://wa.me/5531992111538?text=${t(
        "sections.contact.subjects.number"
      )}`,
      icon: <Icon icon={whatsappIcon} height={22} />,
    },
  ];

  const socialsMobile = [socials[1], socials[0]];

  return (
    <div className="content contact">
      <AnimateComponent
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 },
          },
          hidden: { opacity: 0, y: 70 },
        }}
      >
        <h4 className="title-variant">{t("sections.contact.title")}</h4>
      </AnimateComponent>
      <div className="socials">
        {(isMobile ? socialsMobile : socials).map((social, index) => (
          <AnimateComponent
            key={social.name}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 * ((index + 1) / 4) },
              },
            }}
          >
            <a href={social.link} target="_blank">
              {social.icon}
              <p className="redirect-link">{social.name}</p>
            </a>
          </AnimateComponent>
        ))}
      </div>
    </div>
  );
}
