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
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* Logo Section */}
        <div className="w-28">
          <img src={logo} alt="Gomiles Logo" />
        </div>

        {/* Hamburger Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          <IonIcon icon={open ? close : menu} className="text-black" />
        </div>

        {/* Navigation Links */}
        <ul
          className={`bg-white lg:bg-transparent lg:flex lg:items-center text-white lg:pb-0 absolute lg:static
          lg:z-auto z-40 left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-8 lg:text-sm xl:text-xl font-Bevas uppercase lg:my-0 my-7"
            >
              <Link
                to={link.link}
                className="text-textColor hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
