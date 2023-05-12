import cssIcon from "@iconify/icons-skill-icons/css";
import figmaDark from "@iconify/icons-skill-icons/figma-dark";
import htmlIcon from "@iconify/icons-skill-icons/html";
import javascriptIcon from "@iconify/icons-skill-icons/javascript";
import reactDark from "@iconify/icons-skill-icons/react-dark";
import typescriptIcon from "@iconify/icons-skill-icons/typescript";
import { Icon } from "@iconify/react";
import { AnimateComponent } from "../components/AnimateComponent";
import useLocales from "../hooks/useLocales";
import "../styles/sections/about.scss";

export function AboutMe() {
  const { t } = useLocales();
  const logos = [
    typescriptIcon,
    javascriptIcon,
    reactDark,
    figmaDark,
    cssIcon,
    htmlIcon,
  ];

  return (
    <div className="content about">
      <AnimateComponent
        className="image-container"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <img
          className="my-photo"
          src="images/eu.jpg"
          alt={t("sections.about.alt")}
        />
      </AnimateComponent>
      <div className="text">
        <AnimateComponent
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
          }}
        >
          <h2 className="title">{t("sections.about.title")}</h2>
        </AnimateComponent>

        <AnimateComponent
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
        >
          <div className="text-content text-secondary">
            <p>{t("sections.about.text1")}</p>
            <p>{t("sections.about.text2")}</p>
            <a
              className="redirect-link"
              target="_blank"
              href="https://juliosergiofs.medium.com/"
            >
              {t("sections.about.link")} &gt;&gt;
            </a>
          </div>
        </AnimateComponent>
        <AnimateComponent
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          <div className="logos">
            {logos.map((logo, index) => (
              <AnimateComponent
                key={index}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 * ((index + 1) / 4) },
                  },
                }}
              >
                <Icon key={index} icon={logo} height={48} />
              </AnimateComponent>
            ))}
          </div>
        </AnimateComponent>
      </div>
    </div>
  );
}
