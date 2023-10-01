import { FC } from "react";
import Image from 'next/image'

export const Navbar: FC = () => {
  return (
    <div className="flex h-[50px] sm:h-[60px] border-b border-neutral-300 py-2 px-2 sm:px-8 items-center justify-center">
      <Image
        src="/images/logo_cropped.png"
        width={70}
        height={70}
        alt="company logo"
      />
      <div className="font-bold text-3xl flex items-center justify-center ml-3">
          <h4><span className="text-[#1574b8]">KI</span>ta Chat</h4>
      </div>
    </div>
  );
};
