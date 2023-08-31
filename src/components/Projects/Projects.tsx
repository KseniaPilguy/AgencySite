import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import useElementOnScreen from "hooks/useElementOnScreen";

import proj1 from "../../shared/assets/development/1.png";
import proj2 from "../../shared/assets/development/2.jpg";
import proj3 from "../../shared/assets/development/3.jpg";
import proj4 from "../../shared/assets/development/4.jpg";
import proj5 from "../../shared/assets/development/5.jpg";
import proj6 from "../../shared/assets/development/6.jpg";
import proj7 from "../../shared/assets/development/7.jpg";
import proj8 from "../../shared/assets/development/8.jpg";

import { useMediaQuery } from "react-responsive";

enum Entities {
  development = "development",
  design = "design",
}

const Projects = () => {
  const { t } = useTranslation();

  const [activeEntity, setActiveEntity] = useState(Entities.development);

  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 967 });

  const entytiesList = [
    {
      image: proj1,
      link: "https://naked-extravaganza.com/",
    },
    {
      image: proj2,
      link: "https://kseniapilguy.github.io/construction-company-project/",
    },
    {
      image: proj3,
      link: "https://kseniapilguy.github.io/ecommerce-html-project/",
    },
    {
      image: proj4,
      link: "https://kseniapilguy.github.io/online-education-project/",
    },
    {
      image: proj5,
      link: "https://kseniapilguy.github.io/online-shop-project/",
    },
    {
      image: proj6,
      link: "https://kseniapilguy.github.io/organic-farm-project/",
    },
    {
      image: proj7,
      link: "https://kseniapilguy.github.io/pet-care-project/",
    },
    {
      image: proj8,
      link: "https://kseniapilguy.github.io/laundry-service-project/",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: false,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
  };

  const handleChangeEntity = (val: Entities) => () => setActiveEntity(val);

  const handleProjectNavigate = (link: string | null) => () =>
    link && window.open(link, "_blank");

  return (
    <div
      className="projects"
      id="projects"
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 2rem",
        transition: "600ms ease-in-out",
      }}
    >
      <div className="projects_container container">
        <div className="top_section flex">
          <h2 className="container_title">
            {t("projects.title")}
            <br />
            <span className="container_subtitle">{t("projects.subtitle")}</span>
          </h2>
        </div>
        <div className="circle" />
        <div className="project_cards_container flex">
          {isTabletOrMobile ? (
            <Slider {...sliderSettings}>
              {entytiesList.map((item, ind) => (
                <div key={ind}>
                  <div
                    className="aside_container"
                    onClick={handleProjectNavigate(item.link)}
                  >
                    <div className="project_card">
                      <img src={item.image} alt="project exapmle" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <>
              <div className="aside_container miniatures_container flex">
                {entytiesList.map((item, ind) => (
                  <div
                    className="project_card miniature"
                    key={ind}
                    onClick={handleProjectNavigate(item.link)}
                  >
                    <div className="project_card_description">
                      {t("projects.seeMore")}
                    </div>
                    <img src={item.image} alt="project exapmle" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
