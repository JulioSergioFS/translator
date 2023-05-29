import { AnimateComponent } from "../components/AnimateComponent";
import useLocales from "../hooks/useLocales";
import "../styles/sections/about.scss";

export function AboutMe() {
  const { t } = useLocales();

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
          </div>
        </AnimateComponent>
      </div>
    </div>
  );
}
