import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import useElementOnScreen from "hooks/useElementOnScreen";

import flowerProject from "../../shared/assets/development/flower-proj.png";
import sportProject from "../../shared/assets/development/sport-proj.png";
import articleProject from "../../shared/assets/development/article-proj.png";
import foodProject from "../../shared/assets/development/food.png";
import balletProject from "../../shared/assets/development/ballet.png";

import bike from "../../shared/assets/design/bike.png";
import cafe from "../../shared/assets/design/cafe.png";
import food from "../../shared/assets/design/food.png";
import music from "../../shared/assets/design/music.png";
import yoga from "../../shared/assets/design/yoga.png";

import { useMediaQuery } from "react-responsive";

enum Entities {
  development = 'development',
  design = 'design'
}

const Projects = () => {
  const { t } = useTranslation();

  const [activeEntity, setActiveEntity] = useState(Entities.development);
  
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 967 });

  const entytiesList = activeEntity === Entities.development ? [sportProject, articleProject, foodProject, balletProject]
    : [cafe, bike, music, yoga];

  const initialEntity = activeEntity === Entities.development ? flowerProject : food;

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: false,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1
  };

  const handleChangeEntity = (val: Entities) => () => setActiveEntity(val);

  return (
    <div className="projects" id="projects"
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 2rem",
        transition: "600ms ease-in-out",
      }}>
      <div className="projects_container container">
        <div className="top_section flex">
          <h5>
            <span 
              className={`${activeEntity === Entities.development ? 'active' : ''} element`}
              onClick={handleChangeEntity(Entities.development)}>{t("projects.development")}</span>
            <span className="slash">/</span>
            <span 
              className={`${activeEntity === Entities.design ? 'active' : ''} element`}
              onClick={handleChangeEntity(Entities.design)}>{t("projects.design")}</span>
          </h5>
          <h2 className="container_title">{t("projects.title")}<br />
            <span className="container_subtitle">{t("projects.subtitle")}</span>
          </h2>
        </div>
        <div className="circle" />
        <div className="project_cards_container flex">
          {isTabletOrMobile ? (
            <Slider {...sliderSettings}>
              {[...entytiesList, initialEntity].map((item, ind) => (
                <div key={ind}>
                  <div className="aside_container">
                    <div className="project_card">
                      <img src={item} alt="project exapmle" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <>
            <div className="aside_container">
              <div className="project_card">
                <img src={initialEntity} alt="project exapmle" />
              </div>
            </div>
            <div className="aside_container miniatures_container flex">
              {entytiesList.map((item, ind) => (
                <div className="project_card miniature" key={ind}>
                  <img src={item} alt="project exapmle" />
                </div>
              ))}
            </div>
          </>
          )}
        </div>  
      </div>
    </div>
  );
}

export default Projects;
