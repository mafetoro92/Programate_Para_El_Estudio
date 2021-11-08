import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ITEMS } from "../../api/data";
import { showLogo, hideLogo } from "../../utils/nav";
import Header from "../header/Header";
import Item from "../item/Item";
import "./Nav.scss";

const Nav = () => {
  const [activeItems, setActiveItems] = useState([]);

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
        {ITEMS.map((item, index) => (
          <Item
            key={index}
            item={item}
            toggleItem={() => toggleItem(item.id)}
            activeItems={activeItems}
          />
        ))}
        </nav>
      </div>
    </div>
  );
};

export default Nav;

