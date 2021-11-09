import React from "react";
import { Link } from "react-router-dom";
import Dark from "../darkMode/Dark";
import Search from "../search/Search";
import User from "../user/User";

import "./Header.scss";
const Header = () => {
  return (
    <>
      <header className="header d-flex justify-content-between">
        <div className="header__logo" id="logo">
          <Link to='/'>
          <img
            src="https://i.ibb.co/ZM3jGdB/logoeducamasimbolo.png"
            alt="logo"
          />
          </Link>
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
