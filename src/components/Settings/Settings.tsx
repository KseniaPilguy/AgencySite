import { useState } from "react";

import { ThemeEnum, useThemeContext } from "context/ThemeContext";

import ukraineFlag from "../../shared/assets/ukraine.png";
import americaFlag from "../../shared/assets/united-states.png";
import { useTranslation } from "react-i18next";


const Settings = () => {
  const { t, i18n } = useTranslation();
  const {theme, toggleTheme} = useThemeContext();

  const [isContainerHovered, setIsContainerHovered] = useState(false);

  const onHoverHandle = () => setIsContainerHovered(true);

  const onUnhoverHandle = () => setIsContainerHovered(false);

  const handleToggle = () => toggleTheme(theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light);

  const onChangeLanguage = (selectedLanguage: string) => {
    i18n.changeLanguage(selectedLanguage)
  };

  return (
    <div className={`settings ${isContainerHovered ? "hovered" : ""}`} onMouseOver={onHoverHandle} onMouseLeave={onUnhoverHandle}>
      <div className="settings_container flex">
        <h2>{t("settings.title")}</h2>
        <div className={`content_container ${isContainerHovered ? "" : "hidden"}`}>
          <p>{t("settings.selectLanguage")}</p>
          <div className="flag_container flex">
            <div className="flag_card" onClick={() => onChangeLanguage('en')}>
              <img src={americaFlag} className="image" />
            </div>
            <div className="flag_card" onClick={() => onChangeLanguage('ua')}>
              <img src={ukraineFlag} className="image" />
            </div>
          </div>
          <p>{t("settings.selectTheme")}</p>
          <div className="toggle flex" onClick={handleToggle}>
            <div className={`switcher ${theme === ThemeEnum.light ? "light_selected" : ""}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
