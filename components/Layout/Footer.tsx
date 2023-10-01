import { FC } from "react";

export const Footer: FC = () => {
  return <div className="flex h-[30px] sm:h-[50px] border-t border-neutral-300 py-2 px-8 items-center justify-center">
    Mehr auf
    <a className="ml-2 hover:opacity-50 justify-center"
     target="_blank" 
     rel="noopener noreferrer"
      href="https://www.kitapay.de/" >
      kitapay.de
    </a>
  </div>;
};
