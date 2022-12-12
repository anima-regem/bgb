import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import { animated, useSpring } from "@react-spring/web";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuFade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  const MenuStyles = useSpring({
    from: { opacity: 0, position: "fixed", left: "-1000%", top: "0%" },
    to: {
      opacity: 0.5,
      left: "0",
    },
  });
  return (
    <>
      <div className="mobile_nav_section">
        <div className="mobile_nav">
          <img className="mobile_logo" src={logo} alt="" />
          <img onClick={() => setMenu(true)} src={menuIcon} alt="" />
        </div>

        {menu && <MobileMenu menu={menu} setMenu={setMenu}/>}
      </div>

      <div className="container nav_section">
        <div className="logo_section">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="menu_links">
          <p>Agenda</p>
          <p>Speaker</p>
          <p>FAQ</p>
        </div>
        <div className="register_btn">
          <button>Register now</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
