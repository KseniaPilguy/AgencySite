import { ArrowUp } from "shared/assets/svg/ArrowUp";

interface ButtonTopI {
  isVisible: boolean
}

const ButtonTop = ({isVisible}: ButtonTopI) => {

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div 
      className="button_top" 
      style={{
        opacity: isVisible ? 1 : 0,
        translate: isVisible ? "none" : "0 2rem",
        transition: "600ms ease-in-out",
      }}
      onClick={handleClick}
    >
      <div className="button_top_container flex">
        <div className="icon_container">
          <ArrowUp className="icon" />
        </div>
      </div>
    </div>
  );
}

export default ButtonTop;
