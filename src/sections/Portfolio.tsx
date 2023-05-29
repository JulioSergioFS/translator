import { Carousel } from "react-responsive-carousel";
import { AnimateComponent } from "../components/AnimateComponent";
import { PortfolioCard } from "../components/PortfolioCard";
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
          visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
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
            <PortfolioCard project={project} />
          ))}
        </Carousel>
      </AnimateComponent>
    </div>
  );
}
