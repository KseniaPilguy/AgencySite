import { env } from "process";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { BurgerMenu } from "shared/assets/svg/BurgerMenu";
import MobileHeader from "./components/MobileHeader";

const Header = () => {
  const { t } = useTranslation();
  const [isHeaderHasOpacity, setIsHeaderHasOpacity] = useState(false);
  const [isMobileHeaderOpened, setIsMobileHeaderOpened] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  const handleScroll = () => setIsHeaderHasOpacity(window.scrollY >= 10);

  const handleOpenMobile = () => setIsMobileHeaderOpened(prev => !prev);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [window.scrollY]);

  useEffect(() => {
    if (!isTabletOrMobile) {
      setIsMobileHeaderOpened(false);
    }
  }, [isTabletOrMobile])

  return (
    <div className={`header ${isHeaderHasOpacity ? "opacity" : ""}`}>
      <div className="header_container flex">
        <div className="wrapper flex">
          <h1><span>P</span>erfect</h1>
          {isTabletOrMobile ? (
            <div className="burger_menu_container" onClick={handleOpenMobile}>
              <BurgerMenu className="icon" />
            </div>
          ) : (
            <div className="navigation_menu flex">
              <a href={`${process.env.REACT_APP_HOSTED_LINK}#services`}>{t("header.services")}</a>
              <a href={`${process.env.REACT_APP_HOSTED_LINK}#projects`}>{t("header.projects")}</a>
              <a href={`${process.env.REACT_APP_HOSTED_LINK}#team`}>{t("header.team")}</a>
              <a href={`${process.env.REACT_APP_HOSTED_LINK}#clients`}>{t("header.clients")}</a>
              <a href={`${process.env.REACT_APP_HOSTED_LINK}#contact`}>{t("header.contact")}</a>
            </div>
          )}
        </div>

        {isMobileHeaderOpened && (
          <MobileHeader onClose={() => setIsMobileHeaderOpened(false)} />
        )}
        </div>
    </div>
  );
}

export default Header;
