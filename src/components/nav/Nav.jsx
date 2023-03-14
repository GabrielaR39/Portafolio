import React from "react";
import css from "./Nav.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";

const Nav = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.links}>
          <div className={css.logo}>GDev</div>
          <ul className={css.list}>
            <li>Proyects</li>
            <li>Contact</li>
          </ul>
          <div className={css.icons}>
            <AiOutlineLine className={css.iconLine} />
            <BsGithub className={css.icon} />
            <FaLinkedin className={css.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
