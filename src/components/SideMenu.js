import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <aside class="menu flex flex--center border-right height-100">
      <ul class="menu-list width-100 flex flex--column flex-justify--center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
