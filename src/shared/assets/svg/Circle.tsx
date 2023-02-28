import { IconI } from "interface/interfaces";

export const Circle = ({className}: IconI) => {
  return (
    <svg className={className} width="851" height="383" viewBox="0 0 851 383" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M475.289 86.7901C703.463 174.594 870.397 292.65 848.145 350.473C825.894 408.297 622.884 383.993 394.709 296.188C166.535 208.384 -0.399264 90.3285 21.8524 32.5051C44.1033 -25.3187 247.114 -1.01488 475.289 86.7901Z" stroke="var(--privary)"/>
      <circle id="dot" className='scissorHalf' cx="0" cy="0" r="10"/>
    </svg>
  )
};
