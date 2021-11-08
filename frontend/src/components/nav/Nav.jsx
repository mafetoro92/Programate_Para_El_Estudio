{
  /*  */
}
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
        {ITEMS.map((item, index) => (
          <Item
            key={index}
            item={item}
            toggleItem={() => toggleItem(item.id)}
            activeItems={activeItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Nav;



{
  /* <div className="nav__items mt-4">
<span className='fas fa-border-all nav__icon text-white'><Link to="/" className="nav__link text-white"> Dashboard</Link></span>
<span className='fas fa-bullhorn nav__icon mt-5'><Link to="/convocatoria" className="nav__link">Convocatoria</Link></span>
<span className='far fa-user nav__icon mt-5'><a href="#" className="nav__link"> Aspirantes</a></span>

<label htmlFor="btn-1" className='far fa-address-card nav__icon mt-5 d-flex align-items-center' onClick={() => setArrow(!arrow)}> <a href="#" className="nav__link">Inscripción</a>
    <span className={`fas fa-angle-${arrow ? 'down' : 'up'} arrow__one`}></span>
</label>

<input type="checkbox" className='d-none' id='btn-1' />
<div className='nav__items--inscription'>
    <nav className='nav__list d-flex flex-column'>
        <a href="">Resultados</a>
        <a href="" className='mt-3'>Calificación</a>
        <a href="" className='mt-3'>Parametrización</a>
    </nav>
</div>

<label htmlFor="btn-2" className='fas fa-search-location nav__icon mt-5 d-flex align-items-center' onClick={() => setArrow2(!arrow2)}><a href="#" className="nav__link">Citación</a>
    <span className={`fas fa-angle-${arrow2 ? 'down' : 'up'} arrow__two`}></span>
</label>
<input type="checkbox" className='d-none' id='btn-2' />
<div className='nav__items--inscription'>
    <nav className='nav__list d-flex flex-column'>
        <a href="">Consolidado Postulantes</a>
        <a href="" className='mt-3'>Días de Entrevista</a>
    </nav>
</div>

<label htmlFor="btn-3" className='fas fa-laptop-code nav__icon mt-5 d-flex align-items-center' onClick={() => setArrow3(!arrow3)}><a href="#" className="nav__link">Prueba Técnica</a>
    <span className={`fas fa-angle-${arrow3 ? 'down' : 'up'} arrow__three`}></span>
</label>
<input type="checkbox" className='d-none' id='btn-3' />
<div className='nav__items--inscription'>
    <nav className='nav__list d-flex flex-column'>
        <a href="">Administrar Pruebas Técnicas</a>
        <a href="" className='mt-3'>Calificar Pruebas Técnicas</a>
    </nav>
</div>

<label htmlFor="btn-4" className='fas fa-vote-yea nav__icon mt-5 d-flex align-items-center' onClick={() => setArrow4(!arrow4)}><a href="#" className="nav__link">Selección</a>
    <span className={`fas fa-angle-${arrow4 ? 'down' : 'up'} arrow__four`}></span>
</label>
<input type="checkbox" className='d-none' id='btn-4' />
<div className='nav__items--inscription'>
    <nav className='nav__list d-flex flex-column'>
        <a href="">Resultados</a>
    </nav>
</div>
</div> */
}
