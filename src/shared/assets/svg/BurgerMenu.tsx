import { IconI } from "interface/interfaces";

export const BurgerMenu = ({className}: IconI) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
      <path d="M5 12H20" stroke="var(--privary)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5 17H20" stroke="var(--privary)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5 7H20" stroke="var(--privary)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
};
