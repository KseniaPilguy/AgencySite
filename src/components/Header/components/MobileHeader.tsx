import { useTranslation } from "react-i18next";

import { ArrowRight } from "shared/assets/svg/ArrowRight";
import { ThemeEnum, useThemeContext } from "context/ThemeContext";

import ukraineFlag from "../../../shared/assets/ukraine.png";
import americaFlag from "../../../shared/assets/united-states.png";

interface MobileHeaderI {
  onClose(): void;
}

const MobileHeader = ({onClose}: MobileHeaderI) => {
  const { t, i18n } = useTranslation();
  const {theme, toggleTheme} = useThemeContext();

  const handleOpenLink = (link: string) => () => {
    window.location.replace(link);
    onClose();
  };

  const handleToggle = () => toggleTheme(theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light);

  const onChangeLanguage = (selectedLanguage: string) => {
    i18n.changeLanguage(selectedLanguage)
  };

  return (
    <div className="mobile_header_container">
      <div className="navigation_menu flex">
        <a className="navigation_text" onClick={handleOpenLink("/#services")}>
          {t("header.services")}
          <ArrowRight className="icon"/>
        </a>
        <a className="navigation_text" onClick={handleOpenLink("/#projects")}>
          {t("header.projects")}
          <ArrowRight className="icon"/>
        </a>
        <a className="navigation_text" onClick={handleOpenLink("/#team")}>
          {t("header.team")}
          <ArrowRight className="icon"/>
        </a>
        <a className="navigation_text" onClick={handleOpenLink("/#clients")}>
          {t("header.clients")}
          <ArrowRight className="icon"/>
        </a>
        <a className="navigation_text" onClick={handleOpenLink("/#contact")}>
          {t("header.contact")}
          <ArrowRight className="icon"/>
        </a>
      </div>
      <div className="settings_container flex">
        <div>
          <p>{t("settings.selectLanguage")}</p>
          <div className="flag_container flex">
            <div className="flag_card" onClick={() => onChangeLanguage('en')}>
              <img src={americaFlag} className="image" alt="flag" />
            </div>
            <div className="flag_card" onClick={() => onChangeLanguage('ua')}>
              <img src={ukraineFlag} className="image" alt="flag" />
            </div>
          </div>
        </div>
        <div className="theme_container">
          <p>{t("settings.selectTheme")}</p>
          <div className="toggle flex" onClick={handleToggle}>
            <div className={`switcher ${theme === ThemeEnum.light ? "light_selected" : ""}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
