import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { LinkedInLogo } from "shared/assets/svg/Linkedin";
import { Ostranaut } from "shared/assets/svg/Ostranaut";
import { UpworkLogo } from "shared/assets/svg/Upwork";

import getTextWithBreakLines from "utils/getTextWithBreakLines";

const Banner = () => {
  const { t } = useTranslation();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isShowDots = useMediaQuery({ maxWidth: 798 });

  return (
    <div className="banner">
      <div className="banner_container">
        <div className="top_banner_content flex">
          <div className="additional_title">
            <h2>Front-End<br /><span>Developers</span> Agency<div className="dot">.</div></h2>
            {isTabletOrMobile ? (
              <div className="center_container column">
                <div className="circle">
                  <Ostranaut className="man" />
                </div>
              </div>
            ) : (
              <p>{t("banner.welcomeLabel")}</p>
            )}
          </div>
        </div>
        <div className="main_banner_content flex">
          <div className="introduction_container column">
            <div className="introduction_wrapper animate__animated animate__fadeInLeft">
              <h5>{getTextWithBreakLines(t("banner.socialMediaBlockTitle"))}</h5>
              <p>{t("banner.socialMediaBlockDescription")}</p>
              <div className="social_media flex">
                
                  <div className="flex social_media_card">
                    <a href="https://www.linkedin.com/in/ksenia-pilguy-9a5a37170/" target="_blank" className="flex">
                      <LinkedInLogo className="icon" />
                      <p className="social_media_name">LinkedIn</p>
                    </a>
                  </div>
                
                  <div className="flex social_media_card">
                    <a href="https://www.upwork.com/freelancers/~01bfd34bbe2ff78ed5" target="_blank" className="flex">
                      <UpworkLogo className="icon" />
                      <p className="social_media_name">Upwork</p>
                    </a>
                  </div>
                
              </div>
            </div>
          </div>
          {!isTabletOrMobile && (
          <div className="center_container column">
            <div className="circle">
              <Ostranaut className="man" />
            </div>
          </div>
          )}
          <div className="introduction_container column">
            <div className="introduction_wrapper animate__animated animate__fadeInRight">
              <h5>{getTextWithBreakLines(t("banner.startWorkBlockTitle"))}</h5>
              <p>{t("banner.startWorkBlockDescription")}</p>
              <div className="buttons_container flex">
                <a href="/#contact">{t("banner.startButton")}</a>
                <a href="/#team">{t("banner.readMoreButton")}</a>
              </div>
            </div>
          </div>
          {isShowDots && (
            <>
              <div className="animated_circle" />
              <div className="animated_huge_circle" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
