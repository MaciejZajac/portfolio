import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <aside class="menu flex-center border-right">
      <ul class="menu-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
