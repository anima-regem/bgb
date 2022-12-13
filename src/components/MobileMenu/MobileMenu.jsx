import React from "react";
import { animated, useSpring } from "@react-spring/web";
import closeIcon from "../../assets/icons/close.svg";
import "./MobileMenu.css";

const MobileMenu = ({ menu, setMenu }) => {
  const MenuFade = useSpring({
    from: {
      opacity: 0,
      position: "fixed",
    },
    to: {
      opacity: 1,
      right: "0",
      zIndex: 99,
    },
  });

  const MenuStyles = useSpring({
    from: { opacity: 0, position: "fixed", left: "-100%", top: "0" },
    to: {
      opacity: 1,
      left: "0",
    },
    delay: 4,
  });
  return (
    <>
      <animated.div className="mobile_view container" style={MenuStyles}>
        <div className="close_icon">
          <img onClick={() => setMenu(false)} src={closeIcon} alt="" />
        </div>
        <div className="mobile_menu_links">
          <p>
            <a href="#agenda" onClick={() => setMenu(false)}>
              Agenda
            </a>
          </p>
          <p>
            <a href="#speakers" onClick={() => setMenu(false)}>
              Speaker
            </a>
          </p>
          <p>
            <a href="#faq" onClick={() => setMenu(false)}>
              FAQ
            </a>
          </p>
          <a href="#tickets" id="reg" ></a>
          <div className="register_btn mob-reg">
            <button
              onClick={() => {
                document.getElementById("reg").click();
                setMenu(false);
              }}
            >
              Register now
            </button>
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default MobileMenu;
