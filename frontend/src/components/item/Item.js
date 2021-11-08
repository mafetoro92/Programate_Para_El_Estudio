import React from 'react'
import { Link } from 'react-router-dom';
import './Item.scss'

const Item = ({ item, toggleItem, activeItems }) => {
  
    const { name, icon, items, id, path } = item;
    const isActive = activeItems.find((activeItem) => activeItem === id);
    const iconName = !isActive ? "fa-angle-down" : "fa-angle-up";
  
    return (
      <div className="nav__item cursor-pointer ripple">
        <div
          className="d-flex align-items-center justify-content-between pointer"
          onClick={toggleItem}
        >
          <div className="d-flex align-items-center px-3 prueba">
            <i className={`${icon} nav__item-icon`} />
            <Link className="mx-1 nav__item-label" to={path}>{name}</Link>
          </div>
          {items?.length > 0 && (
            <i className={`fas ${iconName} nav__item-iconArrow`} />
          )}
        </div>
        {items.length > 0 && isActive && (
          <div className="nav__subitem px-5 d-flex flex-column">
            {items?.map((item, index) => (
              <Link className='nav__subitem-label' key={index} to={item.path}>{item.name}</Link>
            ))}
          </div>
        )}
      </div>
    );
  };

export default Item
