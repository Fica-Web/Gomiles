import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { IonIcon } from "@ionic/react";
import { menu, close } from "ionicons/icons";

const NavBar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Packages", link: "/packages" },
    { name: "Contact", link: "/contact" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full top-0 left-0 z-50 relative">
      {/* Desktop & Mobile Wrapper */}
      <div className="md:px-10 px-7 py-4 flex md:flex-col items-center justify-between lg:justify-center">
        {/* Logo Section */}
        <div className="w-28 flex-shrink-0">
          <img src={logo} alt="Gomiles Logo" />
        </div>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 lg:top-6 cursor-pointer lg:hidden"
        >
          <IonIcon icon={open ? close : menu} className="text-black" />
        </div>

        {/* Navigation Links */}
        <ul
          className={`bg-white lg:bg-transparent lg:flex lg:flex-row lg:items-center text-center text-white 
          lg:mt-4 md:mt-2 lg:space-y-0 lg:space-x-8 lg:static absolute left-0 w-full lg:w-auto
          lg:pl-0 pl-9 transition-all duration-300 ease-in z-40 ${open ? "top-20 opacity-100" : "top-[-490px]"} lg:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="relative lg:my-0 my-7 text-black lg:text-sm xl:text-base uppercase hover:text-gray-400 duration-500 group"
            >
              <Link to={link.link} className="relative z-10">
                {link.name}
              </Link>
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
