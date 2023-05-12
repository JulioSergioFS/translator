import keyboardArrowDownRounded from "@iconify/icons-material-symbols/keyboard-arrow-down-rounded";
import { Icon } from "@iconify/react";
import { useState } from "react";
import useLocales from "../hooks/useLocales";
import { Dialog } from "./Dialog";

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const [open, setOpen] = useState(false);
  const { allLang, currentLang, onChangeLang } = useLocales();

  const sortedLangs = [
    ...allLang.filter(({ label }) => currentLang.label === label),
    ...allLang.filter(({ label }) => currentLang.label !== label),
  ];

  return (
    <div className="languages-container">
      {!open ? (
        <div className="dialog-button" onClick={() => setOpen(!open)}>
          {currentLang.icon}
        </div>
      ) : null}
      <Dialog
        show={open}
        onClickOutside={() => {
          setOpen(false);
        }}
      >
        {sortedLangs.map((option, index) => (
          <div
            key={option.value}
            className="item"
            // selected={option.value === currentLang.value}
            onClick={() => {
              onChangeLang(option.value);
              setOpen(false);
            }}
            // style={{ py: 1, px: 2.5 }}
          >
            <div>{option.icon}</div>
            {index === 0 ? (
              <Icon
                icon={keyboardArrowDownRounded}
                height={28}
                className="down-arrow"
              />
            ) : null}
          </div>
        ))}
      </Dialog>
    </div>
  );
}
