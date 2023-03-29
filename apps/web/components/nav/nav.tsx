import { FC } from "react";
import { RiContactsLine, RiProfileLine } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";

const Navbar: FC = () => {
  return (
    <div>
      <a>
        <RiContactsLine />
      </a>
      <a>
        <RiProfileLine />
      </a>
      <a>
        <GrMapLocation />
      </a>
      <a>
        <IoShareSocialOutline />
      </a>
    </div>
  );
};

export default Navbar;
