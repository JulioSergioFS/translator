import { Carousel } from "react-responsive-carousel";
import { AnimateComponent } from "../components/AnimateComponent";
import { projects } from "../constants/project";
import useLocales from "../hooks/useLocales";
import "../styles/sections/portfolio.scss";

export function Portfolio({ isMobile }: { isMobile?: boolean }) {
  const { t } = useLocales();

  return (
    <div className="content">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title">{t("sections.portfolio.title")}</h2>
      </AnimateComponent>

      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        }}
      >
        <p className="subtitle">{t("sections.portfolio.subtitle")}</p>
      </AnimateComponent>

      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <Carousel
          className="carousel"
          autoPlay
          infiniteLoop
          showThumbs={false}
          centerMode={!isMobile}
          centerSlidePercentage={isMobile ? undefined : 30}
          interval={6000}
          showStatus={false}
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <div
              className={`indicator${isSelected ? " select" : ""}`}
              onClick={onClickHandler}
            />
          )}
        >
          {projects.map((project) => (
            <div className="card" key={project.smallName}>
              <div className="company-text">
                <img
                  className="logo"
                  src={project.image}
                  alt={t(
                    `sections.portfolio.description.${project.smallName}.name`
                  )}
                />
                <h4>
                  {t(
                    `sections.portfolio.description.${project.smallName}.name`
                  )}
                </h4>
                <p className="carousel-description">
                  {t(
                    `sections.portfolio.description.${project.smallName}.text1`
                  )}
                </p>
                <p className="carousel-description">
                  {t(
                    `sections.portfolio.description.${project.smallName}.text2`
                  )}
                </p>
              </div>
              {project.url ? (
                <a className="redirect-link" target="_blank" href={project.url}>
                  {t("sections.portfolio.visit")}
                </a>
              ) : null}
            </div>
          ))}
        </Carousel>
      </AnimateComponent>
    </div>
  );
}
