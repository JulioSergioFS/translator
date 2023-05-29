import { useScrollSections } from "react-scroll-section";
import { sections } from "../constants/header";
import useLocales from "../hooks/useLocales";
import "../styles/header.scss";
import LanguagePopover from "./LanguagePopover";

export function Header({
  hasBackground,
  isMobile,
}: {
  hasBackground: boolean;
  isMobile: boolean;
}) {
  const { t } = useLocales();
  const scrollSection = useScrollSections();

  return (
    <ul className={`header${hasBackground ? " header-background" : ""}`}>
      {isMobile ? (
        <li>
          <img src="js.svg" alt="js logo" />
        </li>
      ) : (
        <li className="menu">
          <ul>
            {sections.map((item, index) => (
              <li key={item.id} onClick={scrollSection[index]?.onClick}>
                {t(item.name)}
              </li>
            ))}
          </ul>
        </li>
      )}
      <li className="menu">
        <ul className="socials">
          {hasBackground ? (
            <LanguagePopover hasBackground={hasBackground} />
          ) : null}
        </ul>
      </li>
    </ul>
  );
}
