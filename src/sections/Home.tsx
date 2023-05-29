import keyboardArrowDownRounded from "@iconify/icons-material-symbols/keyboard-arrow-down-rounded";
import { Icon } from "@iconify/react";
import React from "react";
import { useScrollSection } from "react-scroll-section";
import { sections } from "../constants/header";
import useLocales from "../hooks/useLocales";
import "../styles/sections/home.scss";

export function Home({ hidden }: { hidden?: boolean }) {
  const section2 = useScrollSection(sections[1].id);
  const { allLang, currentLang, onChangeLang, t } = useLocales();

  return (
    <div className={`home content${hidden ? " hidden" : ""}`}>
      <div className="info">
        <div className="flags">
          <LanguageFlag languageValue="en" />
          <LanguageFlag languageValue="pt_Br" />
        </div>
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

export function LanguageFlag({
  languageValue,
}: {
  languageValue: "en" | "pt_Br";
}) {
  const { allLang, currentLang, onChangeLang } = useLocales();
  const index = allLang.findIndex(({ value }) => languageValue === value);
  const languageIcon = allLang[index].icon;

  return React.cloneElement(languageIcon, {
    style: {
      opacity: currentLang.value == languageValue ? 1 : 0.5,
      cursor: "pointer",
    },
    onClick: () => {
      onChangeLang(languageValue);
    },
  });
}
