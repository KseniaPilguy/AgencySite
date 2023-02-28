import { useRef } from "react";
import { useTranslation } from "react-i18next";

import useElementOnScreen from "hooks/useElementOnScreen";

import { ArrowDown } from "shared/assets/svg/ArrowDown";
import { Circle } from "shared/assets/svg/Circle";


const ExploringContainer = () => {
  const { t } = useTranslation();
  
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);

  console.log(onScreen)

  return (
    <div className="exploring" 
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 2rem",
        transition: "600ms ease-in-out",
      }}>
      <div className="exploring_container container">
        <div className="title_container flex">
          <div className="square_absolute flex">
            <div className="square" />
            <p>{t("exploring.description")}</p>
          </div>
          <Circle className="icon" />
          <h3>{t("exploring.title").split(' ')[0]}<br /> <span>{t("exploring.subtitle")}</span><br /> {t("exploring.title").split(' ')[1]}</h3>

          <div className="square_absolute flex">
            <div className="square" />
            <p>{t("exploring.description")}</p>
          </div>
        </div>
        <div className="bottom_container flex">
          <p>{t("exploring.realize")}</p>
          <ArrowDown className="arrow" />
          <p>{t("exploring.us")}</p>
        </div>
      </div>
    </div>
  );
}

export default ExploringContainer;
