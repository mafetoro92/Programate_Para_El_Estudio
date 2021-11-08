import React from "react";
import Dark from "../darkMode/Dark";
import Search from "../search/Search";
import User from "../user/User";

import "./Header.scss";
const Header = () => {
  return (
    <>
      <header className="header d-flex justify-content-between">
        <div className="header__logo" id="logo">
          <img
            src="https://i.ibb.co/ZM3jGdB/logoeducamasimbolo.png"
            alt="logo"
          />
        </div>
        <div className="header__search">
          <Search />
        </div>
        <div className="header__user">
          <User />
        </div>
        <div className="header__dark">
          <Dark/>
        </div>
      </header>
    </>
  );
};

export default Header;
