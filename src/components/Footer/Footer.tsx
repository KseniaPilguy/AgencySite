import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";


const Footer = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 798 });
  
  return (
    <div className="footer">
      <div className="footer_container container flex">
        <p>© 2022–2023 FRONT-END DEVELOPERS AGENCY. {isMobile ? <br /> : null} {t("footer.rights")}</p>
      </div>
    </div>
  );
}

export default Footer;
