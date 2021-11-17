import React from 'react'
import { Link } from 'react-router-dom';
import './Item.scss'

const Item = ({ item, toggleItem, activeItems }) => {
  
    const { name, icon, items, id, path } = item;
    const isActive = activeItems.find((activeItem) => activeItem === id);
    const iconName = !isActive ? "fa-angle-down" : "fa-angle-up";
<<<<<<< HEAD
  
=======

    const showClass = isActive ? 'opacity-1' : 'opacity-0';

>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
    return (
      <div className="nav__item cursor-pointer ripple">
        <div
          className="d-flex align-items-center justify-content-between pointer"
          onClick={toggleItem}
        >
<<<<<<< HEAD
          <div className="d-flex align-items-center px-3 prueba">
=======
          <div className="d-flex align-items-center px-3">
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
            <i className={`${icon} nav__item-icon`} />
            <Link className="mx-1 nav__item-label" to={path}>{name}</Link>
          </div>
          {items?.length > 0 && (
            <i className={`fas ${iconName} nav__item-iconArrow`} />
          )}
        </div>
<<<<<<< HEAD
        {items.length > 0 && isActive && (
          <div className="nav__subitem d-flex flex-column">
            {items?.map((item, index) => (
              <Link className='nav__subitem-label' key={index} to={item.path}>{item.name}</Link>
=======
        
        {items.length > 0 && isActive && (
          <div className={`nav__subitem d-flex flex-column transition ${showClass}`}>
            {items?.map((item, index) => (
              <Link className='nav__subitem-label transition' key={index} to={item.path}>{item.name}</Link>
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
            ))}
          </div>
        )}
      </div>
    );
  };

export default Item
