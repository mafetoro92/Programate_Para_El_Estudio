import React, { useState } from 'react';
import Header from '../header/Header';
import './Nav.scss';

const Nav = () => {

    const [arrow, setArrow] = useState(true);
    const [arrow2, setArrow2] = useState(true);
    const [arrow3, setArrow3] = useState(true);
    const [arrow4, setArrow4] = useState(true);

    return (
        <>
            <div className='nav'>
                <div className='nav__img'>
                </div>
                <span className='nav__main d-block mt-2'>Menu</span>
                <div className="nav__items mt-4">
                    <span className='fas fa-border-all nav__icon text-white'><a href="#" className="nav__link text-white"> Dashboard</a></span>
                    <span className='fas fa-bullhorn nav__icon mt-5'><a href="#" className="nav__link">Convocatoria</a></span>
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
                </div>
            </div>
            <Header />
        </>

    );
};

export default Nav;
