import React, { useState } from "react";
import { ITEMS, ITEMS_ASPIRANTS } from "../../api/data";
import Item from "../item/Item";
import "./Nav.scss";

const Nav = ({ user, adminstate }) => {
  const [activeItems, setActiveItems] = useState([]);


  const { admin, loged } = adminstate;
  const { admin2, loged2 } = user;

  const toggleItem = (id) => {
    if (activeItems.find((active) => active === id)) {
      const nuewArry = activeItems.filter((active) => active !== id);
      setActiveItems(nuewArry);
    } else {
      setActiveItems([...activeItems, id]);
    }
  };

  const isActive = ITEMS.findIndex(item => item.pathname === location.pathname)
  const isActiveAspirant = ITEMS_ASPIRANTS.findIndex(item => item.pathname === location.pathname)
 
  



  return (
    <div className="nav" id="menu">
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
                active={index === isActive}
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
                active={index === isActiveAspirant}
              />
            ))}
        </nav>
      </div>
    </div>
  );
};

export default Nav;