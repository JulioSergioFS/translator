import useLocales from "../hooks/useLocales";
import "../styles/sections/portfolio.scss";

export function PortfolioCard({ project }: { project: any }) {
  const { t } = useLocales();

  return (
    <div className="card" key={project.smallName}>
      <div className="company-text">
        <img
          className="logo"
          src={project.image}
          alt={t(`sections.portfolio.description.${project.smallName}.title`)}
        />
        <h6 className="subtitle-text">
          {t(`sections.portfolio.description.${project.smallName}.subtitle`)}
        </h6>
        <h4>
          {t(`sections.portfolio.description.${project.smallName}.title`)}
        </h4>
        <p className="carousel-description">
          {t(`sections.portfolio.description.${project.smallName}.text`)}
        </p>
      </div>
      <div className="links">
        {project.urlPort ? (
          <LanguageButtonFlag
            icon="logos/flag-for-brazil.svg"
            href={project.urlPort}
          />
        ) : null}
        {project.urlEng ? (
          <LanguageButtonFlag
            icon="logos/flag-for-united-kingdom.svg"
            href={project.urlEng}
          />
        ) : null}
      </div>
    </div>
  );
}

export function LanguageButtonFlag({
  icon,
  href,
}: {
  icon: string;
  href: string;
}) {
  return (
    <a target="_blank" href={href}>
      <img height="32px" src={icon} alt="language icon" />
    </a>
  );
}
