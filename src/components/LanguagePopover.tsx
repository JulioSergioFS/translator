import keyboardArrowDownRounded from "@iconify/icons-material-symbols/keyboard-arrow-down-rounded";
import { Icon } from "@iconify/react";
import { useState } from "react";
import useLocales from "../hooks/useLocales";
import { Dialog } from "./Dialog";

// ----------------------------------------------------------------------

export default function LanguagePopover({
  hasBackground,
}: {
  hasBackground: boolean;
}) {
  const [open, setOpen] = useState(false);
  const { allLang, currentLang, onChangeLang } = useLocales();

  const sortedLangs = [
    ...allLang.filter(({ label }) => currentLang.label === label),
    ...allLang.filter(({ label }) => currentLang.label !== label),
  ];

  return (
    <div className="languages-container">
      <Dialog
        hasBackground={hasBackground}
        onClickOutside={() => {
          setOpen(false);
        }}
      >
        {(open ? sortedLangs : [sortedLangs[0]]).map((option, index) => (
          <div
            key={option.value}
            className="item"
            // selected={option.value === currentLang.value}
            onClick={() => {
              onChangeLang(option.value);
              setOpen(!open);
            }}
            // style={{ py: 1, px: 2.5 }}
          >
            <div className="item_info">
              <div className="flag">{option.icon}</div>
              <p>{option.label}</p>
            </div>
            {index === 0 ? (
              <Icon icon={keyboardArrowDownRounded} height={28} />
            ) : null}
          </div>
        ))}
      </Dialog>
    </div>
  );
}
