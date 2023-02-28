import { useRef } from "react";
import { useTranslation } from "react-i18next";

import useElementOnScreen from "hooks/useElementOnScreen";
import getTextWithBreakLines from "utils/getTextWithBreakLines";
import { useMediaQuery } from "react-responsive";

const Services = () => {
  const { t } = useTranslation();
  
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);  

  const isTranslateHorizontal = useMediaQuery({ maxWidth: 880 });
  const isTransformEnabled = useMediaQuery({ maxWidth: 530 });

  const servicesData = [
    {
      number: 0,
      title: t("services.landingTitle"),
      description: t("services.landingDescription")
    },
    {
      number: 1,
      title: t("services.reactTitle"),
      description: t("services.reactDescription")
    },
    {
      number: 2,
      title: t("services.designTitle"),
      description: t("services.designDescription")
    },
    {
      number: 3,
      title: t("services.consultingTitle"),
      description: t("services.consultingDescription")
    }
  ];
  

  return (
    <div className="services" id="services"
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 2rem",
        transition: "600ms ease-in-out",
      }}>
      <div className="services_container container">
        <div className="top_text_container flex">
          <h2 className="container_title flex">{t("services.title")}{" "}
            <span className="container_subtitle">{t("services.subtitle")}</span>
          </h2>
          <p>{getTextWithBreakLines(t("services.opportunities"))}</p>
        </div>
        <div className="services_wrapper flex">
          {servicesData.map((service, ind) => (
            <div className="service_card" key={service.number} 
              style={!isTransformEnabled ? isTranslateHorizontal ? {transform: `translate(${ind % 2 === 0 ? '' : '-'}${20 * ind % 2 === 0 ? 20 : 1}px, ${20 * service.number}px)`} : {transform: `translateY(${20 * service.number}px)`} : {}}>
              <div className="service_card_container">
                <div className="service_card_number">.0{service.number + 1}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
