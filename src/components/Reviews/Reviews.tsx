import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import useElementOnScreen from "hooks/useElementOnScreen";
import { StarsReview } from "shared/assets/svg/StarsReview";


const Reviews = () => {
  const { t } = useTranslation();
  
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);

  const isTablet = useMediaQuery({ maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 798 });

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: 1
  };
  
  return (
    <div className="reviews animate__animated animate__fadeInUp" id="clients"
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 2rem",
        transition: "600ms ease-in-out",
      }}
    >
      <div className='reviews_container container'>
        <h2 className="container_title">{t("reviews.title")}<br />
          <span className="container_subtitle">{t("reviews.subtitle")}</span>
        </h2>
        <Slider {...sliderSettings}>
          <div>
            <div className="review_card flex">
              <div className="line" />
              <h5>Andrew Bierman</h5>
              <StarsReview />
              <p>Ksenia is awesome! Very talented and friendly. She is a brilliant developer. I recommend working with her.
                I look forward to collaborating with Ksenia again in the near future 😊</p>
            </div>
          </div>
          <div>
            <div className="review_card flex">
              <div className="line" />
              <h5>Viktor Louman</h5>
              <StarsReview />
              <p>These guys help me to design Web3 mobile app. Good job. I will return!!</p>
            </div>
          </div>
          <div>
            <div className="review_card flex">
              <div className="line" />
              <h5>Matt Broan</h5>
              <StarsReview />
              <p>I've had a call with Ksenia. Appreciate your opinian and new approaches to solve my issues. We created the React app with MUI. Now it works great.</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;
