import React, { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { ITEMS } from "../../api/data";
import { showLogo, hideLogo } from "../../utils/nav";
import Header from "../header/Header";
import Item from "../item/Item";
import "./Nav.scss";

const Nav = () => {
  const [activeItems, setActiveItems] = useState([]);

=======
import { ITEMS, ITEMS_ASPIRANTS } from "../../api/data";
import { showLogo, hideLogo } from "../../utils/nav";
import Item from "../item/Item";
import "./Nav.scss";

const Nav = ({ user, adminstate }) => {
  const [activeItems, setActiveItems] = useState([]);

  const { nameAdmin, admin, loged } = adminstate;
  const { name, admin2, loged2 } = user;

>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
  const toggleItem = (id) => {
    if (activeItems.find((active) => active === id)) {
      const nuewArry = activeItems.filter((active) => active !== id);
      setActiveItems(nuewArry);
    } else {
      setActiveItems([...activeItems, id]);
    }
  };

  return (
    <div className="nav" onMouseOver={showLogo} onMouseLeave={hideLogo}>
      <span className="nav__title">Menu</span>
      <div className="nav__items mt-2">
        <nav className="nav__fixed">
<<<<<<< HEAD
        {ITEMS.map((item, index) => (
          <Item
            key={index}
            item={item}
            toggleItem={() => toggleItem(item.id)}
            activeItems={activeItems}
          />
        ))}
=======
          {admin &&
            loged &&
            ITEMS.map((item, index) => (
              <Item
                key={index}
                item={item}
                toggleItem={() => toggleItem(item.id)}
                activeItems={activeItems}
              />
            ))}

          {!admin2 &&
            loged2 &&
            ITEMS_ASPIRANTS.map((item, index) => (
              <Item
                key={index}
                item={item}
                toggleItem={() => toggleItem(item.id)}
                activeItems={activeItems}
              />
            ))}
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
        </nav>
      </div>
    </div>
  );
};

export default Nav;
<<<<<<< HEAD

=======
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
