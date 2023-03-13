import useElementOnScreen from "hooks/useElementOnScreen";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { Circle } from "shared/assets/svg/Circle";
import { Location } from "shared/assets/svg/Location";
import { Email } from "shared/assets/svg/Email";
import { Phone } from "shared/assets/svg/Phone";

import ContactForm from "./components/ContactForm";

const Contacts = () => {
  const { t } = useTranslation();
  
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);

  return (
    <div className="contacts" id="contact"
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 2rem",
        transition: "600ms ease-in-out",
      }}>
      <div className="contacts_container container">
        <h2 className="container_title">{t("contacts.title")}
          <span className="container_subtitle"> {t("contacts.subtitle")}</span>
        </h2>
        <Circle className="icon" />
        <div className="contacts_wrapper flex">
          <div className="aside">
            <div className="contact_card flex">
              <Location className="image" />
              <h4>{t("contacts.addressLabel")}</h4>
              <p>{t("contacts.addressData")}</p>
            </div>
            <div className="flex contact_card_half_wrapper">
              <div className="contact_card contact_card_half flex">
                <Email className="image" />
                <h4>{t("contacts.emailLabel")}</h4>
                <p>ksenia.pilguy@gmail.com</p>
              </div>
              <div className="contact_card contact_card_half flex">
                <Phone className="image" />
                <h4>{t("contacts.phoneLabel")}</h4>
                <p>+380507122882</p>
              </div>
            </div>
            <h6>{t("contacts.contactBlockTitle")}</h6>
            <p>{t("contacts.contactBlockDescription")}</p>
          </div>
          {/* <div className="aside">
            <h6>{t("contacts.emailBlockTitle")}</h6>
            <p>{t("contacts.emailBlockDescription")}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
