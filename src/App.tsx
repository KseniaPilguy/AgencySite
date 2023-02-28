import { useState } from "react";

import Banner from "components/Banner/Banner";
import Achievements from "components/Achievements/Achievements";
import Header from "components/Header/Header";
import ExploringContainer from "components/ExploringContainer/ExploringContainer";
import Services from "components/Services/Services";
import Reviews from "components/Reviews/Reviews";
import Projects from "components/Projects/Projects";
import Team from "components/Team/Team";
import Contacts from "components/Contacts/Contacts";
import Footer from "components/Footer/Footer";
import Settings from "components/Settings/Settings";
import ButtonTop from "components/ButtonTop/ButtonTop";
import { useMediaQuery } from "react-responsive";


const App = () => {
  const [isButtonTopVisible, setIsButtonTopVisible] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      return setIsButtonTopVisible(true);
    } 
    
    setIsButtonTopVisible(false);
  }

  return (
    <div className="App">
      <Header />
      {!isTabletOrMobile && <Settings />}
      <ButtonTop isVisible={isButtonTopVisible} />
      <div className="application_wrapper">
        <Banner />
        <Achievements />
        <ExploringContainer />
        <Services />
        <Projects />
        <Team />
        <Reviews />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
