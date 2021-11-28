import React from 'react'
import './NotProfile.scss'

const NotProfile = () => {

    const refreshPage =() => {
        // console.log('refrescando')
        location.reload();
        // refreshPage
    }
    return (
        <div className='not-found d-flex justify-content-center align-items-center flex-wrap'>
            <div className="box-found d-flex justify-content-center flex-column align-items-center">
            <img
            src="https://i.ibb.co/MMvzd4z/sololearn-logo.png"
            alt="sololearn-logo"
            border="0"
            width="400px"
          />
            <p>Antes de empezar, registrate en la sección <span className='bold-500'>FORMULARIO DE INSCRIPCIÓN</span></p>
            <p>Si ya te registraste oprime el boton</p>
            <button onClick={refreshPage} className='btn btn-success mt-2'>Continuar</button>
            </div>
        </div>
    )
}

export default NotProfile
