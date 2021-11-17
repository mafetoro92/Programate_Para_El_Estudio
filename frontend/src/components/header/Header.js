import React from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
import Dark from "../darkMode/Dark";
import Search from "../search/Search";
import User from "../user/User";

import "./Header.scss";
<<<<<<< HEAD
const Header = () => {
=======
const Header = ({user, adminstate}) => {



>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
  return (
    <>
      <header className="header d-flex justify-content-between">
        <div className="header__logo" id="logo">
<<<<<<< HEAD
=======
          <Link to='/'>
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
          <img
            src="https://i.ibb.co/ZM3jGdB/logoeducamasimbolo.png"
            alt="logo"
          />
<<<<<<< HEAD
=======
          </Link>
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
        </div>
        <div className="header__search">
          <Search />
        </div>
        <div className="header__user">
<<<<<<< HEAD
          <User />
=======
          <User user={user} adminstate={adminstate}/>
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
        </div>
        <div className="header__dark">
          <Dark/>
        </div>
      </header>
    </>
  );
};

export default Header;
