import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const Achievements = () => {
  const { t } = useTranslation();
  
  return (
    <div className="achievements">
      <div className="achievements_container flex">
        <div className="achievement_card flex">
          <div className="number flex">
            <p><span>+</span><CountUp end={16} duration={1.5} className="number_value" /></p>
          </div>
          <div className="title flex">
            <p><span>{t("achievements.design.adjective")}</span><br />{t("achievements.design.noun")}</p>
          </div>
        </div>
        <div className="achievement_card flex">
          <div className="number flex">
            <p><span>+</span><CountUp end={20} duration={1.5} className="number_value" /></p>
          </div>
          <div className="title flex">
            <p><span>{t("achievements.develop.adjective")}</span><br />{t("achievements.develop.noun")}</p>
          </div>
        </div>
        <div className="achievement_card flex">
          <div className="number flex">
            <p><span>+</span><CountUp end={120} duration={1.5} className="number_value" /></p>
          </div>
          <div className="title flex">
            <p><span>{t("achievements.consulting.adjective")}</span><br />{t("achievements.consulting.noun")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
