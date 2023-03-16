import { useRef } from "react";
import { useTranslation } from "react-i18next";

import useElementOnScreen from "hooks/useElementOnScreen";
import getTextWithBreakLines from "utils/getTextWithBreakLines";

import emptyPhone from "../../shared/assets/portrait.png";
import ksenia from "../../shared/assets/ksenia.jpeg";

const Team = () => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  
  return (
    <div className="team" id="team"
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 2rem",
        transition: "600ms ease-in-out",
      }}>
      <div className="container">
        <div className="description flex">
          <div className="animated_circle" />
          <div className="animated_huge_circle" />
          <h2 className="container_title">{t("team.title")} 
            <span className="container_subtitle">{t("team.subtitle")}?</span>
          </h2>
          <h6>{t("team.note")}</h6>
          <p>{getTextWithBreakLines(t("team.description"))}</p>
        </div>
        <div className="team_container flex">
          <div className="team_wrapper flex">
            <div className="team_card flex">
              <div className="image_container">
                <img src={ksenia} alt="team member" />
              </div>
              <div className="team_mate_title">
                <h6>{getTextWithBreakLines(t("team.kseniaTitle"))}</h6>
                <p>{t("team.kseniaDescription")}</p>
              </div>
            </div>
          </div>
          <div className="team_wrapper flex">
            <div className="team_card flex">
              <div className="image_container">
                <img src={emptyPhone} alt="team member" />
              </div>
              <div className="team_mate_title">
                <h6>{getTextWithBreakLines(t("team.nikitaTitle"))}</h6>
                <p>{t("team.nikitaDescription")}</p>
              </div>
            </div>
          </div>
          <div className="team_wrapper flex">
            <div className="team_card flex">
              <div className="image_container">
                <img src={emptyPhone} alt="team member" />
              </div>
              <div className="team_mate_title">
                <h6>{getTextWithBreakLines(t("team.viktoriaTitle"))}</h6>
                <p>{t("team.viktoriaDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
