

import { IconI } from "interface/interfaces";

export const Phone = ({className}: IconI) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
      <rect x="5.75" y="1.75" width="12.5" height="20.5" rx="1.75" stroke="var(--secondary)" strokeWidth="1.5"/>
      <path d="M12 19.25C12.6904 19.25 13.25 18.6904 13.25 18C13.25 17.3096 12.6904 16.75 12 16.75C11.3096 16.75 10.75 17.3096 10.75 18C10.75 18.6904 11.3096 19.25 12 19.25Z" fill="var(--secondary)" strokeWidth="0.5"/>
    </svg>
  )
};
