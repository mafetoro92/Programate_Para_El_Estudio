import React, { useState } from "react";
import { ITEMS, ITEMS_ASPIRANTS } from "../../api/data";
import { showLogo, hideLogo } from "../../utils/nav";
import Item from "../item/Item";
import "./Nav.scss";

const Nav = ({ user, adminstate }) => {
  const [activeItems, setActiveItems] = useState([]);

  const { nameAdmin, admin, loged } = adminstate;
  const { name, admin2, loged2 } = user;

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
        </nav>
      </div>
    </div>
  );
};

export default Nav;
