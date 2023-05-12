import keyboardArrowDownRounded from "@iconify/icons-material-symbols/keyboard-arrow-down-rounded";
import { Icon } from "@iconify/react";
import { useScrollSection } from "react-scroll-section";
import { sections } from "../constants/header";
import useLocales from "../hooks/useLocales";
import "../styles/sections/home.scss";

export function Home({ hidden }: { hidden?: boolean }) {
  const { t } = useLocales();
  const section2 = useScrollSection(sections[1].id);

  return (
    <div className={`home content${hidden ? " hidden" : ""}`}>
      <div className="info">
        <h2>{t("sections.home.title")}</h2>
        <p className="text text-highlight">{t("sections.home.subtitle")}</p>
      </div>
      <Icon
        icon={keyboardArrowDownRounded}
        height={40}
        className="down-arrow"
        onClick={section2.onClick}
      />
    </div>
  );
}
